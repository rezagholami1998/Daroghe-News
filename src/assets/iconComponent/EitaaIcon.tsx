const EitaaIcon = ({color="#D1232A",width="auto",height="auto",xsSize=false}) => {
  return (
    <>
      <svg
        width={xsSize? "24px" : width}
        height={xsSize? "24px" : height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_350_5544)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.85716 6.53309e-05H17.1428C20.9146 6.53309e-05 24 3.00634 24 6.68637V9.91326C20.6188 11.3963 17.208 18.7207 12.2366 17.1291C11.8272 17.4131 10.8834 18.5831 10.8172 19.4708C9.09577 19.2471 7.11118 17.3222 7.34934 15.2464C4.48411 13.2241 6.8502 9.49103 9.12228 7.98848C13.992 4.76805 20.7525 7.53769 16.992 9.84029C14.7054 11.2404 9.81559 12.1653 10.324 8.72809C8.98262 9.10557 8.124 11.5461 9.739 12.8178C8.24291 14.252 8.53054 16.8884 10.1297 17.754C11.7471 13.6652 17.3762 14.1995 19.6506 9.31849C21.3617 5.64688 18.8248 1.46328 13.7526 2.10594C9.92453 2.59103 6.33633 5.74188 4.54182 9.47888C2.72108 13.2704 2.99204 18.3476 6.73075 20.9064C11.1306 23.9177 15.8149 21.1294 18.652 17.4852C20.3244 15.3372 21.7855 12.9578 24 11.5834V17.3046C24 20.9845 20.9142 24.0001 17.1428 24.0001H6.85716C3.08571 24.0001 0 20.9892 0 17.3091V6.69094C0 3.01091 3.08571 0 6.85716 0V6.53309e-05Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_350_5544">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default EitaaIcon;
