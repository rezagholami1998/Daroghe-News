const AparatIcon = ({color="#D1232A",width="auto",height="auto",xsSize=false}) => {
  return (
    <>
      <svg
        width={xsSize? "24px" : width}
        height={xsSize? "24px" : height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 0C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0H6ZM15.0623 21.8126L3.89323 18.3999C2.48161 17.9681 1.6857 16.4739 2.11745 15.0586L5.52636 3.89323C5.9581 2.48161 7.45232 1.6857 8.86769 2.11745L20.0368 5.52636C21.4484 5.9581 22.2443 7.45232 21.8126 8.86769L18.3999 20.0368C17.9681 21.4484 16.4739 22.2443 15.0623 21.8126ZM12.0862 20.0871C16.5044 20.0871 20.0862 16.5054 20.0862 12.0871C20.0862 7.66886 16.5044 4.08714 12.0862 4.08714C7.66789 4.08714 4.08617 7.66886 4.08617 12.0871C4.08617 16.5054 7.66789 20.0871 12.0862 20.0871ZM13.1397 12.0693C13.1397 12.6602 12.6607 13.1392 12.0698 13.1392C11.479 13.1392 11 12.6602 11 12.0693C11 11.4785 11.479 10.9995 12.0698 10.9995C12.6607 10.9995 13.1397 11.4785 13.1397 12.0693ZM9.23516 10.4076C8.05768 10.126 7.33335 8.9449 7.61141 7.77063C7.89291 6.59292 9.07382 5.86844 10.2479 6.14656C11.4253 6.42811 12.1497 7.60925 11.8716 8.78352C11.5935 9.9578 10.4126 10.6857 9.23516 10.4076ZM15.3903 11.8703C14.2128 11.5887 13.4885 10.4076 13.7666 9.23332C14.0481 8.05561 15.229 7.33113 16.403 7.60925C17.5805 7.8908 18.3048 9.07194 18.0268 10.2462C17.7453 11.4239 16.5644 12.1518 15.3903 11.8703ZM7.76932 16.5605C6.59185 16.279 5.86751 15.0978 6.14557 13.9235C6.42707 12.7458 7.60798 12.0214 8.78202 12.2995C9.9595 12.581 10.6838 13.7622 10.4058 14.9364C10.1277 16.1141 8.9468 16.8421 7.76932 16.5605ZM13.9245 18.0266C12.747 17.7451 12.0227 16.5639 12.3007 15.3897C12.5822 14.212 13.7631 13.4875 14.9372 13.7656C16.1146 14.0472 16.839 15.2283 16.5609 16.4026C16.2829 17.5803 15.1019 18.3082 13.9245 18.0266Z"
          fill={color}
        />
      </svg>
    </>
  );
};

export default AparatIcon;
