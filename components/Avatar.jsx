const Avatar = ({ url, className }) => (
  <img
    src={url}
    alt='profile pic'
    loading='lazy'
    className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
  />
);

export default Avatar;
