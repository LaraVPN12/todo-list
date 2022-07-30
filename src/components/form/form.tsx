import { FormikProps, useFormik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { TaskData } from '../task';
import { Modal } from '@material-ui/core';

const defaultData: TaskData = {
  title: '',
  description: '',
  assignedTo: '',
  completed: false,
};

interface FormProps {
  setTasks : Dispatch<SetStateAction<TaskData[]>>;
  tasks : TaskData[];

}

export const Form = (props: FormProps) => {
  const { setTasks, tasks } = props;

  const [task, setTask] = useState<TaskData>(defaultData);

  const [toggleAsignedModal, setToogleAsignedModal] = useState(false);


  const setDefaultData = () => setTask(defaultData);
  
  const handleAdd = () => {
    setTasks([...tasks, formik.values]);
  }
  
  const formik : FormikProps<TaskData> = useFormik<TaskData> ({
    initialValues: {
      title: '',
      description: '',
      assignedTo: '',
    },
    onSubmit: handleAdd
});

  return (
    <div className="bg-white shadow-lg w-3/4 rounded-xl p-3">
      <input
        value={formik.values.title}
        placeholder="Titulo de tarea..."
        className="w-full"
        onChange={formik.handleChange}
        name="title"
      />
      <textarea
        value={formik.values.description}
        placeholder="Descripcion de la tarea..."
        className="w-full"
        name="description"
        onChange={formik.handleChange}
      />
      <div className="flex justify-between mt-5">
        <div className="flex justify-start space-x-2">
        <button
            className="bg-white text-gray-500 py-1 px-4 border border-gray-200 rounded-md items-center"
            onClick={() => setToogleAsignedModal(true)}
          >
            <DateRangeRoundedIcon />
            Due Date
          </button>
          
          <button
            className="bg-white text-gray-500 rounded-md py-1 px-4 border"
            onClick={() => setToogleAsignedModal(true)}
          >
            <PermIdentityOutlinedIcon />
            Assign To
          </button>
        </div>
        <div className="flex justify-end space-x-2">
          
          <button
            className="bg-white text-gray-500 py-1 px-4 border border-gray-200 rounded-md"
            onClick={formik.handleReset}
          >
            Cancelar
          </button>
          <button
            className="bg-violet-700 rounded-md text-white py-1 px-4"
            onClick={handleAdd}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
