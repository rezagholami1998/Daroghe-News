const PeopleIcon = ({color="#fff",width="18px",height="18px"}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.75 11.25C12.225 11.25 11.7812 11.0688 11.4188 10.7063C11.0563 10.3438 10.875 9.9 10.875 9.375C10.875 8.85 11.0563 8.40625 11.4188 8.04375C11.7812 7.68125 12.225 7.5 12.75 7.5C13.275 7.5 13.7188 7.68125 14.0813 8.04375C14.4438 8.40625 14.625 8.85 14.625 9.375C14.625 9.9 14.4438 10.3438 14.0813 10.7063C13.7188 11.0688 13.275 11.25 12.75 11.25ZM9 15V13.95C9 13.65 9.07813 13.3719 9.23438 13.1156C9.39063 12.8594 9.6125 12.675 9.9 12.5625C10.35 12.375 10.8156 12.2344 11.2969 12.1406C11.7781 12.0469 12.2625 12 12.75 12C13.2375 12 13.7219 12.0469 14.2031 12.1406C14.6844 12.2344 15.15 12.375 15.6 12.5625C15.8875 12.675 16.1094 12.8594 16.2656 13.1156C16.4219 13.3719 16.5 13.65 16.5 13.95V15H9ZM7.5 9C6.675 9 5.96875 8.70625 5.38125 8.11875C4.79375 7.53125 4.5 6.825 4.5 6C4.5 5.175 4.79375 4.46875 5.38125 3.88125C5.96875 3.29375 6.675 3 7.5 3C8.325 3 9.03125 3.29375 9.61875 3.88125C10.2063 4.46875 10.5 5.175 10.5 6C10.5 6.825 10.2063 7.53125 9.61875 8.11875C9.03125 8.70625 8.325 9 7.5 9ZM1.5 15V12.9C1.5 12.475 1.60625 12.0844 1.81875 11.7281C2.03125 11.3719 2.325 11.1 2.7 10.9125C3.45 10.5375 4.22813 10.25 5.03438 10.05C5.84063 9.85 6.6625 9.75 7.5 9.75C7.9375 9.75 8.375 9.7875 8.8125 9.8625C9.25 9.9375 9.6875 10.025 10.125 10.125L9.4875 10.7625L8.85 11.4C8.625 11.3375 8.4 11.2969 8.175 11.2781C7.95 11.2594 7.725 11.25 7.5 11.25C6.775 11.25 6.06563 11.3375 5.37188 11.5125C4.67813 11.6875 4.0125 11.9375 3.375 12.2625C3.25 12.325 3.15625 12.4125 3.09375 12.525C3.03125 12.6375 3 12.7625 3 12.9V13.5H7.5V15H1.5ZM7.5 7.5C7.9125 7.5 8.26563 7.35313 8.55938 7.05938C8.85313 6.76563 9 6.4125 9 6C9 5.5875 8.85313 5.23438 8.55938 4.94063C8.26563 4.64688 7.9125 4.5 7.5 4.5C7.0875 4.5 6.73438 4.64688 6.44063 4.94063C6.14688 5.23438 6 5.5875 6 6C6 6.4125 6.14688 6.76563 6.44063 7.05938C6.73438 7.35313 7.0875 7.5 7.5 7.5Z"
          fill={color}
        />
      </svg>
    </>
  );
};

export default PeopleIcon;
