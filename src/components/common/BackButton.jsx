import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../icons/ArrowLeft';
const BackButton = ({ color = '#6b7280' }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <ArrowLeft size="35" color={color} />
    </button>
  );
};

export default BackButton;
