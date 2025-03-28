import { motion } from "framer-motion";
type IconProps = React.HTMLAttributes<SVGElement> & {
  stroke?: string;
  fill?: string;
};

export const Icons = {
  search: ({ style, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={19}
      fill="none"
      style={style}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70866 2.3291C4.72742 2.3291 1.5 5.48525 1.5 9.37855C1.5 13.2718 4.72742 16.428 8.70866 16.428C10.4114 16.428 11.9763 15.8507 13.2097 14.8852L15.5528 17.1706L15.6151 17.2231C15.8327 17.3805 16.1411 17.3626 16.3379 17.1696C16.5544 16.9573 16.554 16.6136 16.3369 16.4018L14.0214 14.1433C15.1987 12.8886 15.9173 11.2157 15.9173 9.37855C15.9173 5.48525 12.6899 2.3291 8.70866 2.3291ZM8.70863 3.41492C12.0766 3.41492 14.807 6.08493 14.807 9.37856C14.807 12.6722 12.0766 15.3422 8.70863 15.3422C5.34062 15.3422 2.61031 12.6722 2.61031 9.37856C2.61031 6.08493 5.34062 3.41492 8.70863 3.41492Z"
        fill="#B1BBCD"
      />
    </svg>
  ),
  notifications: ({ style, ...props }: IconProps) => (
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <g clipPath="url(#clip0_10_503)">
        <path
          d="M12.5 2C17.47 2 21.5 6.043 21.5 11.031V20H3.5V11.031C3.5 6.043 7.53 2 12.5 2ZM10 21H15C15 21.663 14.7366 22.2989 14.2678 22.7678C13.7989 23.2366 13.163 23.5 12.5 23.5C11.837 23.5 11.2011 23.2366 10.7322 22.7678C10.2634 22.2989 10 21.663 10 21Z"
          fill="#041549"
        />
        <circle
          cx="19.0453"
          cy="6"
          r="4"
          fill="#EB0000"
          stroke="white"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_503">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  userIcon: ({ style, ...props }: IconProps) => (
    <svg
      width={51}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <circle opacity="0.2" cx="25.5" cy="25" r="25" fill="#B1BBCD" />
      <g clipPath="url(#clip0_10_508)">
        <path
          d="M33.5 35H17.5V33C17.5 31.6739 18.0268 30.4021 18.9645 29.4645C19.9021 28.5268 21.1739 28 22.5 28H28.5C29.8261 28 31.0979 28.5268 32.0355 29.4645C32.9732 30.4021 33.5 31.6739 33.5 33V35ZM25.5 26C24.7121 26 23.9319 25.8448 23.2039 25.5433C22.4759 25.2417 21.8145 24.7998 21.2574 24.2426C20.7002 23.6855 20.2583 23.0241 19.9567 22.2961C19.6552 21.5681 19.5 20.7879 19.5 20C19.5 19.2121 19.6552 18.4319 19.9567 17.7039C20.2583 16.9759 20.7002 16.3145 21.2574 15.7574C21.8145 15.2002 22.4759 14.7583 23.2039 14.4567C23.9319 14.1552 24.7121 14 25.5 14C27.0913 14 28.6174 14.6321 29.7426 15.7574C30.8679 16.8826 31.5 18.4087 31.5 20C31.5 21.5913 30.8679 23.1174 29.7426 24.2426C28.6174 25.3679 27.0913 26 25.5 26Z"
          fill="#B1BBCD"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_508">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(13.5 13)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  arrow: ({ style, ...props }: IconProps) => (
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <g clipPath="url(#clip0_10_515)">
        <path
          d="M12.5 13.172L17.45 8.222L18.864 9.636L12.5 16L6.13599 9.636L7.54999 8.222L12.5 13.172Z"
          fill="#B1BBCD"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_515">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  dashboardIcon: ({ style, fill, ...props }: IconProps) => (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        d="M14.1667 16.6667C15.5475 16.6667 16.6667 15.5475 16.6667 14.1667C16.6667 12.7858 15.5475 11.6667 14.1667 11.6667C12.7858 11.6667 11.6667 12.7858 11.6667 14.1667C11.6667 15.5475 12.7858 16.6667 14.1667 16.6667Z"
        fill={fill}
      />
      <path
        opacity="0.4"
        d="M15.4167 3.33333H12.9167C12.0833 3.33333 11.6667 3.74999 11.6667 4.58333V7.08333C11.6667 7.91666 12.0833 8.33333 12.9167 8.33333H15.4167C16.25 8.33333 16.6667 7.91666 16.6667 7.08333V4.58333C16.6667 3.74999 16.25 3.33333 15.4167 3.33333Z"
        fill={fill}
      />
      <path
        opacity="0.4"
        d="M7.08334 3.33333H4.58334C3.75 3.33333 3.33334 3.74999 3.33334 4.58333V7.08333C3.33334 7.91666 3.75 8.33333 4.58334 8.33333H7.08334C7.91667 8.33333 8.33334 7.91666 8.33334 7.08333V4.58333C8.33334 3.74999 7.91667 3.33333 7.08334 3.33333Z"
        fill={fill}
      />
      <path
        opacity="0.4"
        d="M7.08334 11.6667H4.58334C3.75 11.6667 3.33334 12.0833 3.33334 12.9167V15.4167C3.33334 16.25 3.75 16.6667 4.58334 16.6667H7.08334C7.91667 16.6667 8.33334 16.25 8.33334 15.4167V12.9167C8.33334 12.0833 7.91667 11.6667 7.08334 11.6667Z"
        fill={fill}
      />
    </svg>
  ),
  sermonIcon: ({ style, fill, ...props }: IconProps) => (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        opacity="0.4"
        d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39762 1.66667 1.66666 5.39763 1.66666 10C1.66666 14.6024 5.39762 18.3333 10 18.3333Z"
        fill={fill}
      />
      <path
        d="M12.8833 9.11579L9.15172 6.83246C8.40922 6.37829 7.45412 6.91076 7.45412 7.77993V12.22C7.45412 13.0892 8.40922 13.6217 9.15172 13.1675L12.8833 10.8842C13.545 10.4792 13.545 9.52079 12.8833 9.11579Z"
        fill={fill}
      />
    </svg>
  ),
  seriesIcon: ({ style, fill, ...props }: IconProps) => (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        opacity="0.4"
        d="M5 18.3333H15C16.6667 18.3333 17.5 17.5 17.5 15.8333V10C17.5 8.33333 16.6667 7.5 15 7.5H5C3.33333 7.5 2.5 8.33333 2.5 10V15.8333C2.5 17.5 3.33333 18.3333 5 18.3333Z"
        fill={fill}
      />
      <path
        d="M15 5.625H5C4.655 5.625 4.375 5.345 4.375 5C4.375 4.655 4.655 4.375 5 4.375H15C15.345 4.375 15.625 4.655 15.625 5C15.625 5.345 15.345 5.625 15 5.625Z"
        fill={fill}
      />
      <path
        d="M13.3333 3.125H6.66666C6.32166 3.125 6.04166 2.845 6.04166 2.5C6.04166 2.155 6.32166 1.875 6.66666 1.875H13.3333C13.6783 1.875 13.9583 2.155 13.9583 2.5C13.9583 2.845 13.6783 3.125 13.3333 3.125Z"
        fill={fill}
      />
      <path
        d="M12.1509 12.2948L9.52667 10.689C9.00417 10.3698 8.33334 10.7441 8.33334 11.3549V14.4775C8.33334 15.0883 9.00501 15.4634 9.52667 15.1434L12.1509 13.5375C12.6167 13.2534 12.6167 12.5798 12.1509 12.2948Z"
        fill={fill}
      />
    </svg>
  ),
  plansIcon: ({ style, fill, ...props }: IconProps) => (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        opacity="0.4"
        d="M15 6.66667V10.1792C15 10.3125 14.8941 10.4158 14.7607 10.4233C12.3457 10.5483 10.4167 12.5558 10.4167 15.0008C10.4167 15.4683 10.4842 15.915 10.6158 16.3367C10.6667 16.5008 10.5542 16.6675 10.3817 16.6675H5C3.33333 16.6675 2.5 15.8342 2.5 14.1675V4.16751C2.5 2.50084 3.33333 1.66751 5 1.66751H10V4.16751C10 5.54834 11.1192 6.66751 12.5 6.66751H15V6.66667Z"
        fill={fill}
      />
      <path
        d="M12.5 6.66666H15L10 1.66666V4.16666C10 5.83332 10.8333 6.66666 12.5 6.66666Z"
        fill={fill}
      />
      <path
        d="M11.6667 9.79166H5.83334C5.48834 9.79166 5.20834 9.51166 5.20834 9.16666C5.20834 8.82166 5.48834 8.54166 5.83334 8.54166H11.6667C12.0117 8.54166 12.2917 8.82166 12.2917 9.16666C12.2917 9.51166 12.0117 9.79166 11.6667 9.79166ZM9.79167 12.5C9.79167 12.155 9.51167 11.875 9.16667 11.875H5.83334C5.48834 11.875 5.20834 12.155 5.20834 12.5C5.20834 12.845 5.48834 13.125 5.83334 13.125H9.16667C9.51167 13.125 9.79167 12.845 9.79167 12.5Z"
        fill={fill}
      />
      <path
        d="M15 11.6667C13.1592 11.6667 11.6667 13.1592 11.6667 15C11.6667 16.8408 13.1592 18.3333 15 18.3333C16.8408 18.3333 18.3333 16.8408 18.3333 15C18.3333 13.1592 16.8408 11.6667 15 11.6667ZM16.3367 14.6L14.9475 15.9892C14.8692 16.0675 14.7633 16.1108 14.6525 16.1108C14.5417 16.1108 14.4358 16.0667 14.3575 15.9892L13.6633 15.295C13.5008 15.1325 13.5008 14.8683 13.6633 14.7058C13.8258 14.5433 14.09 14.5433 14.2525 14.7058L14.6517 15.1058L15.7458 14.0117C15.9083 13.8492 16.1725 13.8492 16.335 14.0117C16.4975 14.1742 16.4992 14.4375 16.3367 14.6Z"
        fill={fill}
      />
    </svg>
  ),
  preacherIcon: ({ style, fill, ...props }: IconProps) => (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        d="M16.3558 7.29329C16.1025 8.08913 15.4526 8.735 14.6551 8.98417C13.3651 9.3875 12.1383 8.83417 11.525 7.86001C11.4766 7.78334 11.48 7.68669 11.5242 7.60752C11.8867 6.96086 12.0925 6.21417 12.0925 5.41667C12.0925 5.14 12.0683 4.86998 12.02 4.60581C12.0041 4.51915 12.0308 4.42914 12.0983 4.37164C12.5608 3.97914 13.1592 3.75 13.8009 3.75C15.5642 3.75 16.9391 5.45913 16.3558 7.29329Z"
        fill={fill}
      />
      <path
        opacity="0.4"
        d="M18.75 13.9001C18.75 15.4167 17.9084 16.25 16.3834 16.25H15.1666C15.0333 16.25 14.9225 16.1426 14.9225 16.0009C14.9225 15.9676 14.925 15.9366 14.9334 15.9C14.9834 15.625 15 15.325 15 15.0167C15 13.4167 14.4583 11.8083 13.2916 10.6833C13.2833 10.675 13.275 10.6667 13.2667 10.6584C13.2167 10.6167 13.1916 10.55 13.1916 10.4833C13.1916 10.3416 13.3 10.2334 13.4417 10.2334H15.0917C17.7917 10.2334 18.75 12.2084 18.75 13.9001Z"
        fill={fill}
      />
      <path
        d="M7.50834 8.75001C9.34929 8.75001 10.8417 7.25763 10.8417 5.41668C10.8417 3.57573 9.34929 2.08334 7.50834 2.08334C5.66739 2.08334 4.17501 3.57573 4.17501 5.41668C4.17501 7.25763 5.66739 8.75001 7.50834 8.75001Z"
        fill={fill}
      />
      <path
        opacity="0.4"
        d="M13.75 15.0167C13.75 16.9167 12.7417 17.9167 10.8333 17.9167H4.16667C2.25833 17.9167 1.25 16.9167 1.25 15.0167C1.25 12.8917 2.45 10.4167 5.83333 10.4167H9.16667C12.55 10.4167 13.75 12.8917 13.75 15.0167Z"
        fill={fill}
      />
    </svg>
  ),
  categoriesIcon: ({ style, fill, ...props }: IconProps) => (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        opacity="0.16"
        d="M14.0703 4.26236H11.6177C11.0067 4.2664 10.4267 3.99462 10.0395 3.52291L9.23183 2.40634C8.85114 1.9305 8.27108 1.65744 7.66101 1.66689H5.92717C2.81515 1.66689 1.66667 3.49333 1.66667 6.59902V9.95612C1.6628 10.3253 18.3297 10.3248 18.3308 9.95612V8.98005C18.3456 5.87436 17.2267 4.26236 14.0703 4.26236Z"
        fill={fill}
      />
      <path
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3601 5.45286C17.6267 5.7646 17.8328 6.12319 17.9677 6.51028C18.2332 7.30585 18.3561 8.14189 18.3308 8.98004V13.3576C18.3297 13.7263 18.3025 14.0945 18.2493 14.4594C18.1479 15.1033 17.9214 15.7212 17.5824 16.2784C17.4266 16.5475 17.2374 16.796 17.0193 17.0178C16.0319 17.924 14.7208 18.3957 13.3812 18.3267H6.60885C5.26708 18.3952 3.95385 17.9237 2.96335 17.0178C2.74784 16.7955 2.56114 16.5471 2.40763 16.2784C2.07063 15.7216 1.84891 15.1031 1.75559 14.4594C1.69625 14.0951 1.66651 13.7266 1.66667 13.3576V8.98004C1.66653 8.61444 1.68632 8.2491 1.72595 7.88565C1.73428 7.82189 1.74679 7.75916 1.75916 7.69708C1.77978 7.59359 1.80005 7.49191 1.80005 7.39022C1.87526 6.95162 2.01247 6.52589 2.20757 6.12576C2.78552 4.89088 3.97105 4.26235 5.91235 4.26235H14.0629C15.1502 4.17826 16.2294 4.50559 17.086 5.17927C17.1846 5.26292 17.2763 5.35442 17.3601 5.45286ZM5.80862 12.9509H14.1962H14.2111C14.3951 12.9589 14.5747 12.893 14.7097 12.768C14.8448 12.6429 14.924 12.4691 14.9298 12.2854C14.9402 12.1239 14.887 11.9647 14.7816 11.8417C14.6603 11.6764 14.4682 11.5778 14.2629 11.5755H5.80862C5.42804 11.5755 5.11953 11.8834 5.11953 12.2632C5.11953 12.643 5.42804 12.9509 5.80862 12.9509Z"
        fill={fill}
      />
    </svg>
  ),
  topicsIcon: ({ style, fill, ...props }: IconProps) => (
    <svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        d="M16.4159 20.9821L11.1419 12.4219C11.0244 12.2302 11.0357 11.9848 11.1744 11.8053C11.8007 10.992 12.4357 10.2654 12.9695 9.78064C12.9695 9.78064 13.397 9.36301 13.6683 9.18228C14.0383 8.89043 14.5221 8.75 14.9921 8.75C15.5197 8.75 16.0184 8.90386 16.4172 9.21037C16.4884 9.27997 16.8022 9.54496 17.0585 9.79529C18.6536 11.2558 21.2887 15.0681 22.0875 17.0732C22.2162 17.3651 22.485 18.1442 22.5 18.5484C22.5 18.9379 22.415 19.314 22.2287 19.6755C21.9725 20.12 21.575 20.468 21.1037 20.6634C20.7762 20.7891 19.7936 20.9833 19.7649 20.9833C19.0636 21.1091 18.0785 21.2031 16.9285 21.2495C16.7222 21.2581 16.5222 21.1543 16.4159 20.9821Z"
        fill={fill}
      />
      <path
        opacity="0.4"
        d="M13.5753 20.4096C13.8091 20.787 13.5103 21.262 13.0615 21.2437C12.009 21.1985 11.0814 21.1203 10.3914 21.0251C10.3764 21.0104 9.15258 20.8163 8.73881 20.5928C7.97002 20.2033 7.5 19.4388 7.5 18.617V18.5486C7.51375 18.0186 7.98377 16.8915 8.01252 16.8915C8.24878 16.3237 8.6488 15.5825 9.13008 14.7851C9.34759 14.4261 9.88137 14.4175 10.1026 14.7765L13.5753 20.4096Z"
        fill={fill}
      />
    </svg>
  ),
  filter: ({ style, ...props }: IconProps) => (
    <svg
      width={16}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        d="M12.6667 2.16301H3.33337C2.80294 2.16301 2.29423 2.37372 1.91916 2.7488C1.54409 3.12387 1.33337 3.63258 1.33337 4.16301V4.94301C1.33328 5.2183 1.39002 5.49066 1.50004 5.74301V5.78301C1.59423 5.99699 1.72764 6.19145 1.89337 6.35634L6.00004 10.4363V14.8297C5.99981 14.943 6.02846 15.0545 6.08329 15.1536C6.13811 15.2528 6.2173 15.3363 6.31337 15.3963C6.41947 15.4621 6.54189 15.4967 6.66671 15.4963C6.77107 15.4957 6.87383 15.4706 6.96671 15.423L9.63337 14.0897C9.74332 14.0343 9.83577 13.9495 9.90049 13.8448C9.96521 13.7401 9.99967 13.6195 10 13.4963V10.4363L14.08 6.35634C14.2458 6.19145 14.3792 5.99699 14.4734 5.78301V5.74301C14.5926 5.49263 14.6584 5.2202 14.6667 4.94301V4.16301C14.6667 3.63258 14.456 3.12387 14.0809 2.7488C13.7058 2.37372 13.1971 2.16301 12.6667 2.16301ZM8.86004 9.68968C8.79825 9.75197 8.74937 9.82585 8.71619 9.90707C8.68302 9.9883 8.6662 10.0753 8.66671 10.163V13.083L7.33337 13.7497V10.163C7.33388 10.0753 7.31706 9.9883 7.28389 9.90707C7.25071 9.82585 7.20183 9.75197 7.14004 9.68968L3.60671 6.16301H12.3934L8.86004 9.68968ZM13.3334 4.82968H2.66671V4.16301C2.66671 3.9862 2.73695 3.81663 2.86197 3.69161C2.98699 3.56658 3.15656 3.49634 3.33337 3.49634H12.6667C12.8435 3.49634 13.0131 3.56658 13.1381 3.69161C13.2631 3.81663 13.3334 3.9862 13.3334 4.16301V4.82968Z"
        fill="#676767"
      />
    </svg>
  ),
  add: ({ style, ...props }: IconProps) => (
    <svg
      width={20}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        opacity="0.4"
        d="M9.99996 17.4958C9.53996 17.4958 9.16663 17.1224 9.16663 16.6624V4.99576C9.16663 4.53576 9.53996 4.16243 9.99996 4.16243C10.46 4.16243 10.8333 4.53576 10.8333 4.99576V16.6624C10.8333 17.1224 10.46 17.4958 9.99996 17.4958Z"
        fill="white"
      />
      <path
        d="M15.8334 11.6624H4.16671C3.70671 11.6624 3.33337 11.2891 3.33337 10.8291C3.33337 10.3691 3.70671 9.99577 4.16671 9.99577H15.8334C16.2934 9.99577 16.6667 10.3691 16.6667 10.8291C16.6667 11.2891 16.2934 11.6624 15.8334 11.6624Z"
        fill="white"
      />
    </svg>
  ),
  sort: ({ style, ...props }: IconProps) => (
    <svg
      width={16}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        d="M10.86 9.69316L7.99998 12.5598L5.13998 9.69316C5.01445 9.56762 4.84418 9.4971 4.66665 9.4971C4.48911 9.4971 4.31885 9.56762 4.19331 9.69316C4.06778 9.8187 3.99725 9.98896 3.99725 10.1665C3.99725 10.344 4.06778 10.5143 4.19331 10.6398L7.52665 13.9732C7.58862 14.0356 7.66236 14.0852 7.7436 14.1191C7.82484 14.1529 7.91197 14.1704 7.99998 14.1704C8.08799 14.1704 8.17513 14.1529 8.25637 14.1191C8.3376 14.0852 8.41134 14.0356 8.47331 13.9732L11.8066 10.6398C11.8688 10.5777 11.9181 10.5039 11.9518 10.4227C11.9854 10.3414 12.0027 10.2544 12.0027 10.1665C12.0027 10.0786 11.9854 9.99154 11.9518 9.91033C11.9181 9.82911 11.8688 9.75532 11.8066 9.69316C11.7445 9.631 11.6707 9.58169 11.5895 9.54805C11.5083 9.51441 11.4212 9.4971 11.3333 9.4971C11.2454 9.4971 11.1584 9.51441 11.0771 9.54805C10.9959 9.58169 10.9221 9.631 10.86 9.69316ZM5.13998 6.63983L7.99998 3.77316L10.86 6.63983C10.922 6.70231 10.9957 6.75191 11.0769 6.78575C11.1582 6.8196 11.2453 6.83703 11.3333 6.83703C11.4213 6.83703 11.5085 6.8196 11.5897 6.78575C11.6709 6.75191 11.7447 6.70231 11.8066 6.63983C11.8691 6.57785 11.9187 6.50412 11.9526 6.42288C11.9864 6.34164 12.0038 6.2545 12.0038 6.16649C12.0038 6.07849 11.9864 5.99135 11.9526 5.91011C11.9187 5.82887 11.8691 5.75514 11.8066 5.69316L8.47331 2.35983C8.41134 2.29734 8.3376 2.24775 8.25637 2.2139C8.17513 2.18005 8.08799 2.16263 7.99998 2.16263C7.91197 2.16263 7.82484 2.18005 7.7436 2.2139C7.66236 2.24775 7.58862 2.29734 7.52665 2.35983L4.19331 5.69316C4.06778 5.8187 3.99725 5.98896 3.99725 6.16649C3.99725 6.34403 4.06778 6.51429 4.19331 6.63983C4.31885 6.76536 4.48911 6.83589 4.66665 6.83589C4.84418 6.83589 5.01445 6.76536 5.13998 6.63983Z"
        fill="#434343"
      />
    </svg>
  ),
  play: ({ style, ...props }: IconProps) => (
    <svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <rect y="0.166504" width="24" height="24" rx="12" fill="#FFF0F1" />
      <path
        opacity="0.4"
        d="M15.8855 10.7747L10.0079 7.1779C8.83827 6.46215 7.33386 7.30163 7.33386 8.67013V15.6637C7.33386 17.0322 8.83827 17.8716 10.0079 17.1558L15.8855 13.559C16.9268 12.9214 16.9268 11.4117 15.8855 10.7747Z"
        fill="#FB394F"
      />
    </svg>
  ),
  pause: ({
    isLoading,
    style,
    ...props
  }: { isLoading?: boolean } & IconProps) => (
    <svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <rect y="0.166504" width="24" height="24" rx="12" fill="#FFF0F1" />
      <g opacity="0.4" fill="#FB394F">
        <rect x="8" y="7" width="3" height="11" rx="1" />
        <rect x="13" y="7" width="3" height="11" rx="1" />
      </g>

      {isLoading && (
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="#FB394F"
          strokeWidth="2"
          fill="none"
          strokeDasharray="40"
          strokeDashoffset="0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      )}
    </svg>
  ),
  elipsis: ({ style, ...props }: IconProps) => (
    <svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <rect
        y="24.1665"
        width="24"
        height="24"
        rx="12"
        transform="rotate(-90 0 24.1665)"
        fill="#0B2EA0"
        fillOpacity="0.1"
      />
      <path
        opacity="0.4"
        d="M12.0116 8.66649C11.3676 8.66649 10.842 8.14383 10.842 7.49983C10.842 6.85583 11.3612 6.33316 12.0058 6.33316H12.0116C12.6556 6.33316 13.1783 6.85583 13.1783 7.49983C13.1783 8.14383 12.6562 8.66649 12.0116 8.66649Z"
        fill="#25314C"
      />
      <path
        d="M12.0116 13.3332C11.3676 13.3332 10.842 12.8105 10.842 12.1665C10.842 11.5225 11.3612 10.9998 12.0058 10.9998H12.0116C12.6556 10.9998 13.1783 11.5225 13.1783 12.1665C13.1783 12.8105 12.6562 13.3332 12.0116 13.3332Z"
        fill="#25314C"
      />
      <path
        opacity="0.4"
        d="M12.0116 17.9998C11.3676 17.9998 10.842 17.4772 10.842 16.8332C10.842 16.1892 11.3612 15.6665 12.0058 15.6665H12.0116C12.6556 15.6665 13.1783 16.1892 13.1783 16.8332C13.1783 17.4772 12.6562 17.9998 12.0116 17.9998Z"
        fill="#25314C"
      />
    </svg>
  ),
};
