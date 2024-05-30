import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/rootReducer';
import { useNavigate } from 'react-router-dom';

// Define the validation schema
const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  email: yup.string().required('Email is required').email('Email is not valid'),
});

type DataValue = {
  username: string;
  password: string;
  email: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<DataValue>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: DataValue) => {
    console.log(data);
    dispatch(login(data));
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }} noValidate>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
          <input
            {...register('username')}
            id="username"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.username && <p style={{ color: 'red', marginTop: '5px' }}>{errors.username.message}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            {...register('email')}
            type="email"
            id="email"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.email && <p style={{ color: 'red', marginTop: '5px' }}>{errors.email.message}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input
            {...register('password')}
            type="password"
            id="password"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.password && <p style={{ color: 'red', marginTop: '5px' }}>{errors.password.message}</p>}
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#556cd6', color: '#fff', border: 'none', borderRadius: '5px' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
