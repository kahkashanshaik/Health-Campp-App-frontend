const CheckList = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M2 5.5L3.21429 7L7.5 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12.5L3.21429 14L7.5 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 19.5L3.21429 21L7.5 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 19L12 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 12L12 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 5L12 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
export default CheckList;