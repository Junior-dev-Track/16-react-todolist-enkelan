import React from 'react';

const EditIcon = ({ onClick, style, disabled, ...rest }) => {
  return (
    <svg
      width="50px"
      height="50px"
      style={{ marginLeft: '10px' }}
      viewBox="0 0 1024 1024"
      class="icon"
      onClick={disabled ? undefined : onClick}
      style={{ ...style, cursor: 'pointer', opacity: disabled ? 0.5 : 1 }}
      {...rest}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M993.763 493.538v35c0 13.331-6.04 26.664-18.135 37.137-140.15 121.422-280.35 242.795-420.49 364.219-11.814 10.237-25.813 15.501-42.454 15.501v-35c16.643 0 30.64-5.264 42.454-15.501 140.141-121.424 280.336-242.802 420.49-364.217 12.095-10.475 18.135-23.803 18.135-37.139z"
        fill="#EBBF73"
      />
      <path
        d="M30.239 528.367v-3.5-1.75-3.5-3.5-1.75-3.5-3.5-1.75-3.5-3.5-1.75-3.5c0 14.707 6.701 29.313 19.039 40.019 138.448 120.064 277.049 239.996 415.56 360.02 13.002 11.26 28.74 16.466 47.852 16.994v35c-19.108-0.528-34.85-5.734-47.852-16.994C326.325 808.382 187.725 688.45 49.277 568.386c-12.338-10.705-19.038-25.312-19.038-40.019z"
        fill="#EBBF73"
      />
      <path
        d="M510.786 76.601c16.263 0 32.546 5.362 44.946 16.097 139.95 121.188 279.901 242.376 419.819 363.586 24.241 20.995 24.295 53.413 0.079 74.397-140.15 121.42-280.35 242.796-420.489 364.217-11.815 10.239-25.813 15.502-42.452 15.502-19.109-0.528-34.852-5.734-47.854-16.994-138.511-120.024-277.111-239.956-415.56-360.02-19.581-16.988-24.96-43.81-11.895-65.251 3.919-6.438 8.669-11.829 14.465-16.849C189.954 331.734 328.024 212.152 466.107 92.567c12.296-10.639 28.478-15.966 44.679-15.966z"
        fill="#F6D365"
      />
      <path
        d="M640.07 276.122v-0.02-0.022-0.022-0.024-0.024-0.022-0.021-0.02-1.747-1.851-1.919-1.956-1.954-1.921-1.851-1.747h0.309v15.12l-0.309 0.001z"
        fill="#D9C5A3"
      />
      <path
        d="M640.379 261.003v15.12a9.908 9.908 0 0 0-1.057 0.032 7.881 7.881 0 0 0-0.38 0.044v-15.121c0.127-0.018 0.255-0.032 0.38-0.043 0.261-0.023 0.523-0.036 1.057-0.032"
        fill="#D9C5A3"
      />
      <path
        d="M640.636 276.135a7.368 7.368 0 0 0-0.257-0.013v-15.12c0.082 0.003 0.161 0.006 0.243 0.011 0.016 5.042 0.014 10.082 0.014 15.122z"
        fill="#D9C5A3"
      />
      <path
        d="M737.469 345.383v15.12c-0.006-2.562-1.77-5.139-5.321-8.228a28866.459 28866.459 0 0 0-82.656-71.565c-3.622-3.067-6.372-4.497-9.112-4.586v-15.12c2.74 0.088 5.49 1.518 9.112 4.586a29025.43 29025.43 0 0 1 82.656 71.565c3.551 3.087 5.315 5.666 5.321 8.228"
        fill="#D9C5A3"
      />
      <path
        d="M640.636 276.135c0-5.04 0.002-10.082-0.014-15.122 2.661 0.164 5.354 1.598 8.869 4.575v15.119c-3.51-2.971-6.2-4.406-8.855-4.572z"
        fill="#D9C5A3"
      />
      <path
        d="M737.469 345.383v15.12c-0.006-2.562-1.77-5.139-5.321-8.228a28866.459 28866.459 0 0 0-82.656-71.565c-3.622-3.067-6.372-4.497-9.112-4.586v-15.12c2.74 0.088 5.49 1.518 9.112 4.586a29025.43 29025.43 0 0 1 82.656 71.565c3.551 3.087 5.315 5.666 5.321 8.228"
        fill="#D9C5A3"
      />
      <path
        d="M639.322 276.155c-2.777 0.256-5.612 1.881-9.057 4.852v-1.773-1.879-1.947-1.979-1.977-1.941-1.866-1.758c3.444-2.972 6.278-4.596 9.057-4.852 0.203-0.02 0.41-0.031 0.748-0.033v15.121c-0.338 0-0.543 0.013-0.748 0.032z"
        fill="#D9C5A3"
      />
      <path
        d="M640.379 261.003v15.12a9.908 9.908 0 0 0-1.057 0.032 7.881 7.881 0 0 0-0.38 0.044v-15.121c0.127-0.018 0.255-0.032 0.38-0.043 0.261-0.023 0.523-0.036 1.057-0.032M638.942 261.079V276.2a9.804 9.804 0 0 0-2.07 0.526v-15.121a9.85 9.85 0 0 1 2.07-0.526M636.872 261.605v15.121c-0.958 0.35-1.938 0.855-2.961 1.511v-15.121c1.027-0.655 2.004-1.159 2.961-1.511M633.911 263.116v15.121c-1.153 0.737-2.364 1.666-3.66 2.787-16.402 14.182-32.758 28.403-49.181 42.56-0.657 0.567-1.389 1.074-2.13 1.547v-15.12c0.741-0.473 1.474-0.98 2.13-1.547 16.42-14.157 32.778-28.378 49.181-42.56 1.296-1.122 2.507-2.05 3.66-2.788"
        fill="#D9C5A3"
      />
      <path
        d="M649.898 281.061l-0.407-0.352v-1.773-1.877-1.948-1.979-1.978-1.939-1.866-1.758l0.407 0.351v15.119z"
        fill="#D9C5A3"
      />
      <path
        d="M737.469 345.383v15.12c-0.006-2.562-1.77-5.139-5.321-8.228a28866.459 28866.459 0 0 0-82.656-71.565c-3.622-3.067-6.372-4.497-9.112-4.586v-15.12c2.74 0.088 5.49 1.518 9.112 4.586a29025.43 29025.43 0 0 1 82.656 71.565c3.551 3.087 5.315 5.666 5.321 8.228"
        fill="#D9C5A3"
      />
      <path
        d="M603.01 304.616v-0.791-0.837-0.87-0.882-0.882-0.865-0.832-0.783-0.984-1.04-1.079-1.096-1.095-1.075-1.035-0.974c9.078-7.865 18.152-15.735 27.241-23.593 0.004-0.006 0.011-0.01 0.017-0.016v15.119c-0.006 0.006-0.013 0.01-0.017 0.016-9.089 7.859-18.163 15.728-27.241 23.594z"
        fill="#D9C5A3"
      />
      <path
        d="M633.911 263.116v15.121c-1.153 0.737-2.364 1.666-3.66 2.787-16.402 14.182-32.758 28.403-49.181 42.56-0.657 0.567-1.389 1.074-2.13 1.547v-15.12c0.741-0.473 1.474-0.98 2.13-1.547 16.42-14.157 32.778-28.378 49.181-42.56 1.296-1.122 2.507-2.05 3.66-2.788"
        fill="#D9C5A3"
      />
      <path
        d="M581.07 323.582c-1.523 1.313-3.428 2.295-4.987 3.324v-15.12c1.56-1.029 3.466-2.01 4.987-3.324 7.321-6.312 14.632-12.638 21.939-18.967V304.613a11242.32 11242.32 0 0 1-21.939 18.969z"
        fill="#D9C5A3"
      />
      <path
        d="M633.911 263.116v15.121c-1.153 0.737-2.364 1.666-3.66 2.787-16.402 14.182-32.758 28.403-49.181 42.56-0.657 0.567-1.389 1.074-2.13 1.547v-15.12c0.741-0.473 1.474-0.98 2.13-1.547 16.42-14.157 32.778-28.378 49.181-42.56 1.296-1.122 2.507-2.05 3.66-2.788"
        fill="#D9C5A3"
      />
      <path
        d="M578.94 310.01v15.12c-0.86 0.55-1.739 1.058-2.543 1.571v-15.12c0.804-0.514 1.683-1.022 2.543-1.571M576.397 311.58v15.12l-0.317 0.204v-15.12c0.106-0.067 0.211-0.136 0.317-0.204"
        fill="#D9C5A3"
      />
      <path
        d="M732.147 352.275a28899.898 28899.898 0 0 0-82.249-71.214v-1.773-1.876-1.943-1.978-1.976-1.939-1.871-1.765a28899.898 28899.898 0 0 1 82.249 71.214c3.552 3.088 5.315 5.666 5.321 8.229v15.12c-0.005-2.563-1.769-5.14-5.321-8.228z"
        fill="#D9C5A3"
      />
      <path
        d="M737.469 345.383v15.12c-0.006-2.562-1.77-5.139-5.321-8.228a28866.459 28866.459 0 0 0-82.656-71.565c-3.622-3.067-6.372-4.497-9.112-4.586v-15.12c2.74 0.088 5.49 1.518 9.112 4.586a29025.43 29025.43 0 0 1 82.656 71.565c3.551 3.087 5.315 5.666 5.321 8.228"
        fill="#D9C5A3"
      />
      <path
        d="M737.469 345.381v15.12c0.005 2.563-1.75 5.112-5.239 8.145-17.996 15.659-36.052 31.269-53.941 46.779v-15.121c17.89-15.509 35.945-31.121 53.941-46.779 3.489-3.031 5.244-5.58 5.239-8.144z"
        fill="#D9C5A3"
      />
      <path
        d="M737.469 345.381v15.12c0 0.116-0.003 0.232-0.01 0.349v-15.12c0.007-0.116 0.01-0.232 0.01-0.349M737.459 345.73v15.12c-0.098 1.607-0.886 3.218-2.36 4.955v-15.12c1.474-1.736 2.262-3.346 2.36-4.955"
        fill="#D9C5A3"
      />
      <path
        d="M735.099 350.686v15.12c-0.772 0.907-1.728 1.848-2.871 2.841-17.996 15.659-36.051 31.269-53.94 46.779v-15.121c17.89-15.509 35.944-31.121 53.94-46.78 1.143-0.991 2.1-1.932 2.871-2.839"
        fill="#D9C5A3"
      />
      <path
        d="M640.106 260.998c3.014 0.094 5.763 1.523 9.058 4.311a28382.534 28382.534 0 0 1 82.983 71.847c3.552 3.088 5.316 5.664 5.321 8.228s-1.75 5.113-5.239 8.145c-17.996 15.659-36.052 31.271-53.941 46.78-33.928-29.383-67.64-58.581-102.204-88.521 1.559-1.029 3.465-2.012 4.987-3.324 16.422-14.159 32.777-28.378 49.181-42.56 3.451-2.981 6.291-4.61 9.071-4.868 0.262-0.026 0.523-0.038 0.783-0.038z"
        fill="#F9EC9B"
      />
      <path
        d="M678.287 400.306v15.121c-33.929-29.384-67.641-58.579-102.204-88.521v-15.12c34.563 29.94 68.275 59.135 102.204 88.52z"
        fill="#D9C5A3"
      />
      <path
        d="M678.287 400.306v15.121c-33.929-29.384-67.641-58.579-102.204-88.521v-15.12c34.563 29.94 68.275 59.135 102.204 88.52"
        fill="#D9C5A3"
      />
      <path
        d="M651.569 422.39v15.12a818967.155 818967.155 0 0 0-100.146-86.735v-15.12c33.078 28.643 66.753 57.808 100.146 86.735z"
        fill="#D9C5A3"
      />
      <path
        d="M651.569 422.39v15.12a818967.155 818967.155 0 0 0-100.146-86.735v-15.12c33.078 28.643 66.753 57.808 100.146 86.735"
        fill="#D9C5A3"
      />
      <path
        d="M551.423 335.654v15.12c-79.86 69.155-160.066 138.599-239.637 207.5v-15.12c79.572-68.902 159.777-138.345 239.637-207.5z"
        fill="#D9C5A3"
      />
      <path
        d="M551.423 335.654v15.12c-79.86 69.155-160.066 138.599-239.637 207.5v-15.12c79.572-68.902 159.777-138.345 239.637-207.5"
        fill="#D9C5A3"
      />
      <path
        d="M411.942 629.897v15.119c-33.221-28.77-66.888-57.933-100.156-86.742v-15.12c33.268 28.809 66.935 57.974 100.156 86.743z"
        fill="#D9C5A3"
      />
      <path
        d="M411.942 629.897v15.119c-33.221-28.77-66.888-57.933-100.156-86.742v-15.12c33.268 28.809 66.935 57.974 100.156 86.743"
        fill="#D9C5A3"
      />
      <path
        d="M651.569 422.39v15.12a5061630.123 5061630.123 0 0 1-239.627 207.506v-15.12c79.735-69.042 159.867-138.432 239.627-207.506z"
        fill="#D9C5A3"
      />
      <path
        d="M651.569 422.39v15.12a5061630.123 5061630.123 0 0 1-239.627 207.506v-15.12c79.735-69.042 159.867-138.432 239.627-207.506"
        fill="#D9C5A3"
      />
      <path
        d="M370.183 656.087a732541.823 732541.823 0 0 1-71.459-61.909v-15.119c23.614 20.457 47.571 41.215 71.459 61.907v15.121z"
        fill="#D9C5A3"
      />
      <path
        d="M370.183 640.966v15.121c-23.888-20.69-47.845-41.449-71.459-61.909v-15.119c23.614 20.458 47.571 41.216 71.459 61.907"
        fill="#D9C5A3"
      />
      <path
        d="M298.724 579.059v15.119c-2.297 21.945-4.673 44.751-7.115 68.125v-15.121c2.442-23.372 4.818-46.18 7.115-68.123z"
        fill="#D9C5A3"
      />
      <path
        d="M298.724 579.059v15.119c-2.297 21.945-4.673 44.751-7.115 68.125v-15.121c2.442-23.372 4.818-46.18 7.115-68.123"
        fill="#D9C5A3"
      />
      <path
        d="M298.724 579.059l71.46 61.907c-25.04 1.981-51.393 4.063-78.574 6.217 2.443-23.373 4.82-46.183 7.114-68.124z"
        fill="#D9C5A3"
      />
      <path
        d="M370.185 640.966v15.121c-25.04 1.981-51.393 4.063-78.574 6.216v-15.12c27.181-2.154 53.534-4.236 78.574-6.217z"
        fill="#D9C5A3"
      />
      <path
        d="M370.185 640.966v15.121c-25.04 1.981-51.393 4.063-78.574 6.216v-15.12c27.181-2.154 53.534-4.236 78.574-6.217"
        fill="#D9C5A3"
      />
      <path
        d="M758.176 316.366c8.826 7.637 12.898 16.499 13.344 27.617 0.544 13.709-5.369 23.908-16.175 33.242-109.363 94.529-218.608 189.178-327.782 283.873-5.052 4.393-10.56 6.624-17.644 7.157-40.127 3.01-80.224 6.278-120.341 9.374-1.458 0.11-2.924 0.146-4.393 0.146-2.561 0-5.132-0.107-7.692-0.107-1.68 0.188-3.363 0.189-5.041 0.189l-2.517-0.001c-8.745 0-15.114-5.059-14.667-12.728 0.725-12.326 2.13-24.631 3.392-36.935 2.813-27.354 5.877-54.696 8.473-82.076 0.655-6.884 3.239-12.289 8.99-17.262 109.736-94.83 219.442-189.682 328.824-284.824 10.666-9.276 23.784-13.009 35.749-13.009 8.876 0 17.115 2.052 23.246 5.419 3.513 1.925 6.803 4.289 9.755 6.828 28.213 24.324 56.327 48.726 84.479 73.097zM411.942 629.898A5617654.36 5617654.36 0 0 0 651.57 422.389a916232.898 916232.898 0 0 0-100.146-86.736c-79.86 69.155-160.066 138.599-239.636 207.5 33.266 28.811 66.93 57.976 100.154 86.745m320.287-276.37c3.486-3.032 5.244-5.582 5.239-8.144-0.006-2.562-1.77-5.141-5.321-8.229a29186.163 29186.163 0 0 0-82.656-71.565c-3.622-3.067-6.372-4.497-9.112-4.586a9.643 9.643 0 0 0-1.057 0.032c-2.782 0.256-5.622 1.885-9.071 4.868-16.402 14.182-32.758 28.403-49.181 42.56-1.523 1.313-3.428 2.294-4.987 3.324 34.563 29.94 68.275 59.136 102.205 88.521 17.889-15.512 35.942-31.122 53.941-46.781m-440.62 293.655c27.183-2.152 53.535-4.235 78.574-6.217-23.888-20.69-47.845-41.449-71.459-61.907-2.297 21.943-4.673 44.751-7.115 68.124"
        fill="#EFD5AB"
      />
      <path
        d="M551.424 335.653c33.077 28.644 66.752 57.809 100.146 86.737a5714710.178 5714710.178 0 0 1-239.627 207.508c-33.221-28.77-66.888-57.935-100.156-86.743 79.572-68.904 159.776-138.349 239.637-207.502z"
        fill="#F5DB84"
      />
      <path
        d="M771.555 345.709v15.12c0 12.848-5.863 22.578-16.209 31.516-109.362 94.529-218.607 189.179-327.783 283.875-5.05 4.395-10.558 6.623-17.642 7.156-40.127 3.011-80.224 6.279-120.341 9.373a57.382 57.382 0 0 1-4.393 0.146c-2.561 0-5.133-0.108-7.692-0.108v-15.119c2.559 0 5.131 0.107 7.692 0.107 1.468 0 2.934-0.035 4.393-0.146 40.117-3.096 80.213-6.364 120.341-9.374 7.084-0.533 12.592-2.766 17.642-7.157 109.174-94.695 218.421-189.344 327.783-283.873 10.345-8.94 16.209-18.67 16.209-31.516z"
        fill="#D9C5A3"
      />
      <path
        d="M771.555 345.709v15.12c0 0.827-0.024 1.64-0.073 2.44v-15.12c0.048-0.801 0.073-1.616 0.073-2.44M771.481 348.147v15.12c-0.515 8.566-3.762 15.729-9.287 22.245v-15.121c5.526-6.513 8.773-13.677 9.287-22.244M762.194 370.392v15.121c-1.994 2.349-4.282 4.613-6.85 6.831-109.363 94.528-218.608 189.179-327.782 283.875a31.25 31.25 0 0 1-3.642 2.738v-15.121a31.222 31.222 0 0 0 3.642-2.738c109.173-94.695 218.419-189.345 327.782-283.874 2.568-2.218 4.856-4.482 6.85-6.832"
        fill="#D9C5A3"
      />
      <path
        d="M423.922 663.835v15.121a27.016 27.016 0 0 1-5.256 2.611v-15.121a26.987 26.987 0 0 0 5.256-2.611M418.666 666.446v15.121c-2.001 0.732-4.125 1.251-6.417 1.563v-15.119c2.291-0.314 4.416-0.83 6.417-1.565M412.247 668.011v15.119c-0.757 0.103-1.532 0.185-2.328 0.243-40.127 3.011-80.224 6.28-120.341 9.374a57.365 57.365 0 0 1-4.393 0.146c-2.561 0-5.132-0.108-7.692-0.108v-15.12c2.56 0 5.131 0.108 7.692 0.108a57.4 57.4 0 0 0 4.393-0.147c40.118-3.094 80.213-6.363 120.341-9.372a40.648 40.648 0 0 0 2.328-0.243"
        fill="#D9C5A3"
      />
      <path
        d="M255.245 681v-1.512-0.757-1.511-1.512-0.756-1.513-1.512-0.755-1.512-1.514-0.755-1.512c0 7.244 6.237 11.975 14.691 11.975 0.838 0.002 1.678 0.002 2.516 0.002 1.679 0 3.362-0.002 5.042-0.19v15.12c-1.68 0.191-3.363 0.192-5.042 0.192l-2.516-0.001c-8.454 0-14.691-4.731-14.691-11.977z"
        fill="#D9C5A3"
      />
      <path
        d="M277.495 677.667v15.119c-1.68 0.191-3.363 0.193-5.042 0.193-0.838 0-1.677 0-2.516-0.002-8.455 0-14.691-4.731-14.691-11.978v-15.12c0 7.245 6.237 11.976 14.691 11.976l2.516 0.001c1.678 0 3.361-0.001 5.042-0.189"
        fill="#D9C5A3"
      />
    </svg>
  );
};

export { EditIcon };

const DeleteIcon = ({ onClick, style, ...rest }) => {
  return (
    <svg
      width="50px"
      height="50px"
      style={{ marginLeft: '10px' }}
      viewBox="0 0 1024 1024"
      onClick={onClick}
      style={{ ...style, cursor: 'pointer' }}
      {...rest}
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M993.763 493.538v35c0 13.331-6.04 26.664-18.135 37.137-140.149 121.422-280.35 242.795-420.49 364.219-11.813 10.237-25.813 15.501-42.454 15.501v-35c16.644 0 30.641-5.264 42.454-15.501C695.28 773.47 835.474 652.092 975.628 530.677c12.095-10.475 18.135-23.803 18.135-37.139z"
        fill="#EB613C"
      />
      <path
        d="M30.239 528.367v-3.5-1.75-3.5-3.5-1.75-3.5-3.5-1.75-3.5-3.5-1.75-3.5c0 14.707 6.701 29.313 19.037 40.019 138.449 120.064 277.049 239.996 415.562 360.02 13.002 11.26 28.74 16.466 47.853 16.994v35c-19.108-0.528-34.851-5.734-47.853-16.994C326.325 808.382 187.725 688.45 49.276 568.386c-12.337-10.705-19.037-25.312-19.037-40.019z"
        fill="#EB613C"
      />
      <path
        d="M510.786 76.601c16.263 0 32.546 5.362 44.946 16.097 139.949 121.188 279.9 242.376 419.818 363.586 24.241 20.995 24.295 53.413 0.079 74.396C835.48 652.101 695.28 773.478 555.141 894.898c-11.814 10.238-25.813 15.502-42.451 15.502-19.109-0.528-34.853-5.734-47.854-16.994C326.324 773.382 187.724 653.45 49.275 533.386c-19.581-16.987-24.96-43.81-11.895-65.251 3.919-6.438 8.669-11.829 14.465-16.849C189.954 331.734 328.024 212.152 466.107 92.567c12.296-10.64 28.478-15.966 44.679-15.966z"
        fill="#ED7764"
      />
      <path
        d="M582.413 335.149v16.8c0-1.498-0.016-2.986-0.062-4.473-0.434-13.969-10.353-22.802-26.469-22.907-7.067-0.048-14.138-0.082-21.205-0.103a6666.65 6666.65 0 0 0-19.492-0.029H514.224c-7.358 0-14.716 0.011-22.075 0.031-8.023 0.022-16.042 0.054-24.064 0.092-12.086 0.053-21.994 5.359-24.625 14.211v-16.8c2.63-8.852 12.54-14.158 24.625-14.211 8.021-0.039 16.041-0.072 24.064-0.092 7.357-0.02 14.716-0.031 22.075-0.031H515.185c6.497 0 12.993 0.009 19.492 0.029 7.068 0.022 14.14 0.055 21.205 0.103 16.118 0.105 26.037 8.938 26.469 22.907 0.045 1.486 0.062 2.974 0.062 4.473z"
        fill="#BF3F1F"
      />
      <path
        d="M582.413 335.149v16.8c0-1.498-0.016-2.986-0.062-4.473-0.434-13.969-10.353-22.802-26.469-22.907-7.067-0.048-14.138-0.082-21.205-0.103a6666.65 6666.65 0 0 0-19.492-0.029H514.224c-7.358 0-14.716 0.011-22.075 0.031-8.023 0.022-16.042 0.054-24.064 0.092a39.313 39.313 0 0 0-5.134 0.352v-16.8a39.142 39.142 0 0 1 5.134-0.351c8.021-0.039 16.041-0.072 24.064-0.092 7.357-0.02 14.716-0.031 22.075-0.031H515.185c6.497 0 12.993 0.009 19.492 0.029 7.068 0.022 14.14 0.055 21.205 0.103 16.118 0.105 26.037 8.938 26.469 22.907 0.045 1.485 0.062 2.973 0.062 4.472"
        fill="#BF3F1F"
      />
      <path
        d="M462.952 308.113v16.8c-2.433 0.333-4.733 0.896-6.849 1.672v-16.8c2.115-0.775 4.417-1.339 6.849-1.672"
        fill="#BF3F1F"
      />
      <path
        d="M456.104 309.786v16.8a25.628 25.628 0 0 0-4.954 2.429v-16.8a25.571 25.571 0 0 1 4.954-2.429M451.149 312.215v16.8c-1.723 1.099-3.224 2.388-4.465 3.85v-16.8c1.241-1.463 2.744-2.751 4.465-3.85M446.684 316.065v16.8a16.291 16.291 0 0 0-3.224 5.909v-16.8a16.268 16.268 0 0 1 3.224-5.909"
        fill="#BF3F1F"
      />
      <path
        d="M514.756 307.638h0.432c6.498 0 12.992 0.009 19.491 0.029 7.068 0.021 14.14 0.055 21.205 0.103 16.118 0.105 26.038 8.938 26.472 22.907 0.043 1.486 0.059 2.973 0.059 4.471 0 2.496-0.038 5.021-0.038 7.619H440.944c0.786-7.133 0.554-14.212 2.52-20.794 2.63-8.852 12.54-14.159 24.625-14.211 8.021-0.039 16.041-0.07 24.064-0.093 7.357-0.019 14.718-0.03 22.078-0.03l0.525-0.001z"
        fill="#EB6036"
      />
      <path
        d="M715.991 354.005l0.001 16.8c-0.001 5.737-5.233 10.647-12.709 10.874-1.47 0.045-2.939 0.059-4.41 0.059-2.265 0-4.525-0.032-6.79-0.032-1.235 0.004-2.472 0.005-3.729 0.005-2.521 0-5.135-0.005-8.03-0.005v-16.8c2.896 0 5.512 0.005 8.03 0.005 1.259 0 2.494-0.001 3.729-0.005 2.263 0 4.524 0.032 6.79 0.032 1.472 0 2.941-0.014 4.41-0.059 7.476-0.227 12.708-5.138 12.708-10.874z"
        fill="#BF3F1F"
      />
      <path
        d="M715.991 354.005v16.8c0 0.199-0.006 0.399-0.019 0.597v-16.8c0.013-0.198 0.019-0.398 0.019-0.597"
        fill="#BF3F1F"
      />
      <path
        d="M715.974 354.602v16.8c-0.136 2.097-0.968 4.063-2.354 5.703v-16.8c1.386-1.64 2.22-3.607 2.354-5.703"
        fill="#BF3F1F"
      />
      <path
        d="M713.622 360.304v16.8a11.865 11.865 0 0 1-2.673 2.326v-16.8a11.911 11.911 0 0 0 2.673-2.326M710.947 362.629v16.8c-0.805 0.514-1.688 0.954-2.646 1.305v-16.8c0.96-0.351 1.843-0.79 2.646-1.305"
        fill="#BF3F1F"
      />
      <path
        d="M708.304 363.934v16.8a15.43 15.43 0 0 1-3.244 0.798v-16.8a15.322 15.322 0 0 0 3.244-0.798M705.058 364.732v16.8c-0.574 0.079-1.167 0.127-1.774 0.146-1.471 0.045-2.939 0.059-4.412 0.059-2.263 0-4.524-0.032-6.788-0.032-1.236 0.004-2.472 0.006-3.731 0.006-2.52 0-5.134-0.006-8.029-0.006v-16.8c2.896 0 5.512 0.005 8.029 0.005 1.261 0 2.495-0.001 3.731-0.005 2.263 0 4.522 0.032 6.788 0.032 1.474 0 2.943-0.014 4.412-0.059a16.685 16.685 0 0 0 1.774-0.146"
        fill="#BF3F1F"
      />
      <path
        d="M308.009 370.873v-16.8c0 5.811 5.213 10.634 12.679 10.789 2.954 0.062 5.911 0.079 8.884 0.079 4.626 0 9.295-0.044 14.067-0.044v16.8c-4.773 0-9.442 0.044-14.067 0.044-2.975 0-5.931-0.018-8.884-0.08-7.466-0.154-12.679-4.977-12.679-10.788z"
        fill="#BF3F1F"
      />
      <path
        d="M343.639 364.896v16.8c-4.773 0-9.442 0.044-14.067 0.044-2.975 0-5.931-0.018-8.884-0.08-7.466-0.154-12.679-4.977-12.679-10.789v-16.8c0 5.811 5.213 10.634 12.679 10.789 2.954 0.062 5.911 0.079 8.884 0.079 4.624 0.001 9.293-0.043 14.067-0.043"
        fill="#BF3F1F"
      />
      <path
        d="M508.548 421.773c-2.459 0.619-4.439 1.633-5.928 3.042-0.084-7.315-0.109-8.39-0.383-16.417 1.521-1.609 3.633-2.752 6.311-3.426 0.198-0.049 0.399-0.094 0.599-0.137 0.894-0.185 1.787-0.28 2.885-0.297V404.538h0.018c0.194 0 0.386 0.003 0.581 0.013 5.11 0.206 9.701 3.131 11.334 7.388 0.276 0.722 0.468 1.483 0.563 2.276 0.105 0.864 0.133 1.738 0.133 2.611v16.8c0-0.874-0.026-1.747-0.133-2.611a9.618 9.618 0 0 0-0.563-2.275c-1.633-4.259-6.224-7.183-11.334-7.389a14.076 14.076 0 0 0-0.581-0.012c-1.104 0.016-2.003 0.111-2.899 0.296-0.204 0.042-0.405 0.088-0.603 0.138z"
        fill="#BF3F1F"
      />
      <path
        d="M524.657 416.828v16.8c0-0.874-0.027-1.747-0.133-2.611a9.618 9.618 0 0 0-0.563-2.275c-1.633-4.259-6.224-7.183-11.334-7.389a14.112 14.112 0 0 0-0.581-0.012 16.19 16.19 0 0 0-1.983 0.139v-16.8c0.609-0.082 1.25-0.128 1.983-0.138 0.193 0 0.385 0.003 0.581 0.013 5.11 0.206 9.701 3.131 11.334 7.388 0.275 0.722 0.467 1.483 0.563 2.276 0.106 0.863 0.133 1.736 0.133 2.609"
        fill="#BF3F1F"
      />
      <path
        d="M510.064 404.678v16.8c-0.313 0.043-0.614 0.097-0.918 0.158a16.99 16.99 0 0 0-2.348 0.675v-16.8a16.746 16.746 0 0 1 2.348-0.674c0.303-0.064 0.606-0.115 0.918-0.159"
        fill="#BF3F1F"
      />
      <path
        d="M506.799 405.509v16.8c-0.949 0.35-1.81 0.77-2.582 1.262v-16.8a13.295 13.295 0 0 1 2.582-1.262"
        fill="#BF3F1F"
      />
      <path
        d="M504.218 406.771v16.8a10.413 10.413 0 0 0-2.345 2.032v-16.8a10.363 10.363 0 0 1 2.345-2.032"
        fill="#BF3F1F"
      />
      <path
        d="M428.092 433.512a15.54 15.54 0 0 0-2.433 0.282 9654.2 9654.2 0 0 1 0.059-16.811 16.656 16.656 0 0 1 3.169-0.285c0.102 0.001 0.203 0.001 0.305 0.004v16.797c-0.102-0.003-0.203-0.003-0.305-0.004-0.324 0.003-0.562 0.008-0.795 0.017z"
        fill="#BF3F1F"
      />
      <path
        d="M441.576 431.249v16.8c0-1.809 0-3.633-0.282-5.413-0.766-4.983-5.363-8.668-11.11-9.089a19.685 19.685 0 0 0-2.092-0.035c-0.525 0.021-1.039 0.066-1.538 0.134v-16.799a16.195 16.195 0 0 1 2.334-0.148c0.425 0.001 0.857 0.019 1.296 0.049 5.747 0.419 10.344 4.104 11.11 9.089 0.282 1.78 0.282 3.605 0.282 5.412M426.554 416.846v16.799c-1.034 0.14-2.006 0.378-2.907 0.71v-16.8c0.902-0.332 1.873-0.57 2.907-0.709"
        fill="#BF3F1F"
      />
      <path
        d="M582.58 443.216v-0.122-0.128-0.132-0.136-0.135-0.132-0.128-0.118-1.841-1.954-2.028-2.063-2.063-2.027-1.951-1.84c0.79-5.739 5.717-9.629 12.619-9.723v16.799c-6.902 0.093-11.829 3.983-12.619 9.722z"
        fill="#BF3F1F"
      />
      <path
        d="M595.396 416.69v16.8a17.81 17.81 0 0 0-2.325 0.159v-16.8a17.81 17.81 0 0 1 2.325-0.159M593.07 416.849v16.8a14.913 14.913 0 0 0-3.154 0.771v-16.8a15.004 15.004 0 0 1 3.154-0.771M589.916 417.621v16.8c-0.889 0.327-1.712 0.733-2.461 1.213v-16.8c0.751-0.48 1.575-0.886 2.461-1.213M587.455 418.833v16.8a11.025 11.025 0 0 0-2.494 2.168v-16.8a11.093 11.093 0 0 1 2.494-2.168M584.961 421.002v16.8c-1.323 1.566-2.167 3.499-2.418 5.69-0.043 0.386-0.077 0.776-0.098 1.167v-16.8c0.021-0.391 0.055-0.779 0.098-1.166 0.251-2.193 1.095-4.124 2.418-5.691"
        fill="#BF3F1F"
      />
      <path
        d="M607.707 443.254c-0.789-5.648-5.88-9.64-12.313-9.766v-16.8c6.433 0.125 11.521 4.117 12.313 9.766V443.254z"
        fill="#BF3F1F"
      />
      <path
        d="M607.848 428.969v16.8c0-0.801-0.021-1.601-0.123-2.39-0.731-5.713-5.852-9.765-12.328-9.889v-16.8c6.478 0.126 11.596 4.175 12.328 9.889 0.101 0.789 0.123 1.588 0.123 2.39"
        fill="#BF3F1F"
      />
      <path
        d="M425.661 433.793c-5.872 1.165-9.517 5.689-9.517 12.387v-16.8c0-6.72 3.668-11.253 9.575-12.398-0.014 2.55-0.054 14.333-0.058 16.811z"
        fill="#BF3F1F"
      />
      <path
        d="M426.554 416.846v16.799c-1.034 0.14-2.006 0.378-2.907 0.71v-16.8c0.902-0.332 1.873-0.57 2.907-0.709M423.646 417.555v16.799c-0.813 0.299-1.571 0.673-2.269 1.118v-16.8a11.79 11.79 0 0 1 2.269-1.117"
        fill="#BF3F1F"
      />
      <path
        d="M421.38 418.674v16.8a10.685 10.685 0 0 0-2.412 2.105v-16.8a10.685 10.685 0 0 1 2.412-2.105M418.968 420.779v16.8c-1.628 1.929-2.609 4.482-2.793 7.539v-16.8c0.183-3.056 1.165-5.61 2.793-7.539M416.175 428.318v16.8c-0.021 0.349-0.03 0.702-0.03 1.063v-16.8c0-0.36 0.01-0.714 0.03-1.063"
        fill="#BF3F1F"
      />
      <path
        d="M429.53 433.513l-0.337-0.01v-1.964-2.083-2.159-2.198-2.196-2.159-2.08-1.959c0.111 0.001 0.226 0.005 0.337 0.009V416.714c0.217 0.007 0.436 0.02 0.654 0.034 5.747 0.42 10.344 4.104 11.11 9.089 0.282 1.78 0.282 3.605 0.282 5.413v16.8c0-1.809 0-3.632-0.282-5.413-0.766-4.984-5.363-8.667-11.11-9.089a24.299 24.299 0 0 0-0.654-0.035v-0.01-0.009-0.01-0.009-0.008-0.01-0.008-0.011 0.075z m0-0.458V433.422 433.055"
        fill="#BF3F1F"
      />
      <path
        d="M441.576 431.249v16.8c0-1.809 0-3.633-0.282-5.413-0.766-4.983-5.363-8.668-11.11-9.089a19.685 19.685 0 0 0-2.092-0.035c-0.525 0.021-1.039 0.066-1.538 0.134v-16.799a16.195 16.195 0 0 1 2.334-0.148c0.425 0.001 0.857 0.019 1.296 0.049 5.747 0.419 10.344 4.104 11.11 9.089 0.282 1.78 0.282 3.605 0.282 5.412"
        fill="#BF3F1F"
      />
      <path
        d="M428.804 416.698c0.509 0.002 0.942 0.019 1.381 0.05 5.747 0.42 10.344 4.104 11.108 9.089 0.283 1.78 0.283 3.605 0.283 5.411 0.01 13.641 0.012 27.28 0.012 40.92l-0.001 40.921c0 13.836-0.009 27.671-0.009 41.504 0 13.835 0.009 27.669 0.05 41.505 0.01 5.327-1.553 9.77-7.51 12.152-1.81 0.692-3.437 0.991-5.028 1.021-6.37-0.116-11.669-3.847-12.755-9.359-0.187-1.089-0.201-1.938-0.201-2.775v-0.581c0-27.862-0.004-55.729-0.004-83.589 0-27.859 0.004-55.721 0.014-83.582 0-7.58 4.669-12.375 11.947-12.668 0.236-0.015 0.472-0.019 0.713-0.019z"
        fill="#DB4416"
      />
      <path
        d="M654.838 495.167c0 41.769 0.01 83.538 0.05 125.304 0.013 16.411-6.965 29.418-24.481 36.575-6.241 2.548-13.76 3.799-20.716 3.832-17.992 0.078-35.987 0.128-53.979 0.158-17.84 0.03-35.689 0.044-53.532 0.044-18.879 0-36.866-0.013-54.86-0.03l-32.938-0.031c-21.935-0.026-38.021-10.267-43.635-27.786-1.182-3.677-1.442-7.665-1.442-11.517-0.051-52.609-0.062-105.227-0.063-157.843l0.001-94.71v-4.05h285.604v4.749c0.001 41.766-0.009 83.535-0.009 125.305zM524.636 609.321c0.025-16.03 0.028-32.063 0.028-48.096-0.001-16.032-0.008-32.063-0.008-48.096 0-31.426 0-62.844-0.012-94.262 0-0.679 0.015-1.362 0.013-2.041 0-0.874-0.027-1.748-0.133-2.611a9.626 9.626 0 0 0-0.563-2.276c-1.633-4.259-6.224-7.182-11.334-7.388a14.077 14.077 0 0 0-0.581-0.013c-1.104 0.015-2.003 0.111-2.899 0.297-0.199 0.041-0.4 0.087-0.6 0.137-6.066 1.526-9.223 5.455-9.223 11.803-0.009 32.067-0.014 64.136-0.014 96.204s0.004 64.133 0.004 96.195c0 0.778 0.009 1.555 0.1 2.331 0.555 4.863 4.546 8.676 10.061 9.619a16.78 16.78 0 0 0 1.787 0.214 15.338 15.338 0 0 0 1.7 0.018c6.738-0.287 11.656-5.039 11.674-12.035m-90.746-0.984c6.185-2.474 7.748-6.914 7.737-12.24a14006.55 14006.55 0 0 1-0.052-41.506c0-13.834 0.01-27.669 0.01-41.503l0.002-40.921c0-13.638-0.002-27.278-0.012-40.919 0-1.809 0-3.632-0.282-5.413-0.766-4.985-5.363-8.668-11.107-9.089a19.797 19.797 0 0 0-2.093-0.035c-7.282 0.292-11.948 5.089-11.948 12.668-0.009 27.859-0.012 55.721-0.012 83.583l0.003 83.587-0.001 0.582c0 0.84 0.012 1.686 0.15 2.509 1.135 5.781 6.434 9.51 12.275 9.625 2.121-0.026 3.747-0.323 5.33-0.928m173.949-53.955c0.002-13.771-0.003-27.54-0.003-41.313v-82.231c0-0.622 0.012-1.247 0.012-1.869 0-0.801-0.021-1.601-0.123-2.39-0.731-5.713-5.852-9.764-12.328-9.889-7.114 0.024-12.176 4.058-12.854 10.002-0.16 1.414-0.16 2.846-0.16 4.26a373889.712 373889.712 0 0 0 0 164.082c0 1.545 0.021 3.106 0.232 4.643 0.715 5.149 5.25 8.965 11.21 9.533 0.274 0.026 0.554 0.043 0.832 0.053 0.745 0.01 0.993 0.004 1.24-0.01 5.011-0.262 9.565-3.137 11.081-7.454 0.676-1.939 0.815-4.067 0.825-6.11 0.027-13.769 0.034-27.538 0.036-41.307"
        fill="#EB6036"
      />
      <path
        d="M511.829 404.541c0.41-0.001 0.604 0.001 0.799 0.011 5.11 0.206 9.701 3.131 11.334 7.388 0.275 0.722 0.467 1.483 0.563 2.276 0.107 0.864 0.133 1.738 0.133 2.611 0.002 0.679-0.012 1.362-0.012 2.041 0.011 31.417 0.011 62.834 0.011 94.262 0 16.03 0.007 32.063 0.008 48.096 0.002 16.03-0.003 32.063-0.028 48.097-0.02 6.991-4.938 11.746-11.673 12.034-0.218 0.011-0.438 0.017-0.659 0.017a23.469 23.469 0 0 1-1.043-0.033 16.622 16.622 0 0 1-1.787-0.215c-5.514-0.943-9.505-4.756-10.062-9.619-0.089-0.778-0.101-1.555-0.101-2.331 0-32.063-0.004-64.128-0.004-96.196 0-32.065 0.004-64.135 0.015-96.203 0-6.346 3.153-10.274 9.223-11.804 0.2-0.048 0.399-0.094 0.599-0.135 0.9-0.188 1.798-0.283 2.684-0.297z"
        fill="#DB4416"
      />
      <path
        d="M654.888 620.471v16.8c0.013 16.412-6.965 29.418-24.481 36.575-6.241 2.548-13.76 3.8-20.716 3.832-17.992 0.078-35.987 0.129-53.979 0.158-17.84 0.03-35.689 0.044-53.532 0.044-18.879 0-36.866-0.012-54.86-0.03-10.979-0.009-21.958-0.021-32.938-0.03-21.935-0.027-38.021-10.267-43.635-27.786-1.182-3.677-1.442-7.666-1.442-11.518v-16.8c0 3.852 0.261 7.84 1.442 11.516 5.613 17.521 21.7 27.761 43.635 27.787 10.98 0.014 21.958 0.023 32.938 0.031 17.994 0.021 35.981 0.03 54.86 0.03 17.841 0 35.692-0.013 53.532-0.044 17.992-0.03 35.987-0.082 53.979-0.158 6.956-0.033 14.475-1.284 20.716-3.832 17.518-7.157 24.492-20.164 24.481-36.575z"
        fill="#BF3F1F"
      />
      <path
        d="M654.888 620.471v16.8a51.533 51.533 0 0 1-0.096 3.311v-16.8c0.065-1.087 0.099-2.192 0.096-3.311M654.792 623.782v16.8c-0.513 8.508-3.085 15.999-8.26 22.097v-16.801c5.175-6.099 7.747-13.588 8.26-22.096M646.532 645.878v16.801c-2.25 2.654-4.995 5.046-8.278 7.146v-16.8c3.281-2.1 6.027-4.492 8.278-7.147M638.254 653.021v16.802c-2.339 1.492-4.947 2.838-7.848 4.022-0.46 0.188-0.928 0.37-1.399 0.543v-16.801c0.472-0.172 0.939-0.354 1.399-0.542 2.899-1.184 5.509-2.528 7.848-4.024M629.005 657.588v16.801c-3.498 1.285-7.337 2.187-11.215 2.716v-16.801c3.878-0.53 7.717-1.431 11.215-2.716M617.79 660.304v16.801a62.027 62.027 0 0 1-8.101 0.573c-17.992 0.078-35.987 0.129-53.979 0.158-17.84 0.03-35.69 0.044-53.532 0.044-18.879 0-36.866-0.012-54.86-0.03-10.979-0.009-21.958-0.021-32.938-0.03-21.935-0.027-38.021-10.267-43.635-27.786-1.183-3.677-1.442-7.666-1.442-11.518v-16.8c0 3.852 0.262 7.84 1.442 11.516 5.612 17.521 21.7 27.761 43.635 27.787 10.98 0.014 21.958 0.023 32.938 0.031 17.994 0.021 35.981 0.03 54.86 0.03 17.841 0 35.692-0.013 53.532-0.044 17.992-0.03 35.987-0.082 53.979-0.158a62.005 62.005 0 0 0 8.101-0.574"
        fill="#BF3F1F"
      />
      <path
        d="M715.116 349.941c3.175 7.28-2.629 14.658-11.833 14.937-1.47 0.045-2.939 0.059-4.41 0.059-2.265 0-4.525-0.032-6.79-0.032-1.235 0.004-2.472 0.005-3.729 0.005-2.521 0-5.135-0.005-8.03-0.005v5.161c0 83.934 0.089 167.878-0.052 251.812-0.039 25.665-13.428 44.504-40.179 55.858-8.84 3.745-18.376 5.291-28.192 5.291-39.433 0.01-78.876 0.063-118.308 0.063-27.177 0-54.342-0.023-81.52-0.105-39.039-0.122-68.363-26.329-68.403-60.715-0.081-66.999-0.021-133.997-0.021-200.987-0.009-17.206 0-34.402-0.009-51.61V364.9c-4.774 0-9.443 0.044-14.068 0.044-2.975 0-5.93-0.018-8.884-0.079-8.878-0.183-14.574-6.976-12.096-14.177 1.432-4.19 5.646-7.21 10.754-7.604 1.3-0.101 2.601-0.115 3.906-0.115l1.468 0.001c28.525-0.009 57.054-0.009 85.578-0.009h5.836c0-3.928 0.102-7.507-0.021-11.078-0.897-26.434 21.732-43.377 42.79-45.587 35.755-0.584 70.409-0.584 105.055-0.584 3.811 0.996 7.722 1.789 11.43 3.01 18.94 6.198 31.751 21.773 32.366 39.284 0.171 4.776 0.03 9.549 0.03 14.953h5.445c11.024 0.009 22.064 0.009 33.093 0.009 18.386 0 36.771 0 55.166 0.008 7.167 0.009 11.613 2.339 13.628 6.965z m-84.711 307.106c17.518-7.158 24.494-20.165 24.484-36.576-0.043-41.767-0.051-83.534-0.051-125.304 0-41.771 0.008-83.538 0.008-125.303v-4.75H369.242v4.052l-0.002 94.71c0.001 52.616 0.012 105.232 0.063 157.843 0 3.851 0.262 7.841 1.442 11.517 5.612 17.521 21.7 27.759 43.635 27.785 10.98 0.014 21.958 0.023 32.938 0.033 17.993 0.019 35.979 0.03 53.974 0.03 18.733 0 36.572-0.013 54.42-0.044 17.992-0.03 35.987-0.082 53.979-0.158 6.955-0.037 14.473-1.285 20.714-3.835M443.46 321.972c-1.966 6.583-1.733 13.663-2.52 20.794h141.432c0-2.597 0.039-5.123 0.039-7.617 0-1.498-0.015-2.987-0.061-4.473-0.434-13.969-10.354-22.802-26.469-22.907a5552.46 5552.46 0 0 0-21.205-0.103c-6.5-0.02-12.995-0.029-19.492-0.029H514.223c-7.359 0-14.717 0.011-22.075 0.031-8.022 0.022-16.043 0.054-24.064 0.092-12.084 0.054-21.992 5.362-24.624 14.212"
        fill="#DB4416"
      />
      <path
        d="M595.023 416.687c6.853 0.127 11.969 4.178 12.7 9.891 0.103 0.79 0.125 1.59 0.125 2.391 0 0.621-0.013 1.247-0.013 1.869v82.231c0 13.771 0.004 27.543 0.002 41.313 0 13.771-0.009 27.539-0.033 41.307-0.011 2.041-0.148 4.171-0.827 6.108-1.515 4.317-6.069 7.195-11.081 7.454-0.246 0.015-0.494 0.021-0.741 0.021-0.775-0.021-1.054-0.035-1.329-0.063-5.958-0.567-10.493-4.383-11.211-9.535-0.209-1.535-0.229-3.098-0.229-4.643a320488.432 320488.432 0 0 1 0-164.08c0-1.415 0-2.848 0.158-4.26 0.677-5.943 5.737-9.978 12.479-10.004z"
        fill="#DB4416"
      />
      <path
        d="M680.35 511.413v16.8c0 36.821-0.018 73.645-0.08 110.463-0.039 25.665-13.428 44.504-40.178 55.858-8.84 3.744-18.376 5.291-28.193 5.291-39.432 0.009-78.877 0.063-118.306 0.063-27.178 0-54.343-0.023-81.521-0.105-39.039-0.122-68.363-26.329-68.403-60.714-0.032-27.007-0.041-54.012-0.041-81.017v-16.8c0 27.004 0.009 54.009 0.041 81.015 0.04 34.388 29.364 60.594 68.403 60.716 27.178 0.083 54.343 0.105 81.521 0.105 39.429 0 78.875-0.054 118.306-0.063 9.817 0 19.353-1.546 28.193-5.291 26.75-11.354 40.138-30.192 40.178-55.857 0.062-36.823 0.08-73.644 0.08-110.464z"
        fill="#BF3F1F"
      />
      <path
        d="M680.35 511.413v16.8c0 36.821-0.018 73.645-0.08 110.463a72.534 72.534 0 0 1-0.125 4.146v-16.8c0.081-1.363 0.122-2.744 0.125-4.146 0.062-36.822 0.08-73.643 0.08-110.463M680.145 626.021v16.801c-0.761 12.652-4.965 23.536-12.609 32.564v-16.801c7.644-9.027 11.848-19.91 12.609-32.564M667.534 658.586v16.801c-3.885 4.585-8.658 8.692-14.321 12.311v-16.8c5.663-3.619 10.435-7.726 14.321-12.312M653.211 670.896v16.801c-3.941 2.519-8.314 4.799-13.119 6.839-0.908 0.386-1.825 0.748-2.747 1.087v-16.8a60.01 60.01 0 0 0 2.747-1.087c4.804-2.041 9.178-4.321 13.119-6.84M637.345 678.822v16.8c-4.56 1.674-9.285 2.8-14.127 3.462v-16.8c4.842-0.662 9.567-1.789 14.127-3.462M623.218 682.284v16.8c-3.715 0.509-7.496 0.742-11.319 0.742-39.432 0.01-78.876 0.063-118.308 0.063-27.178 0-54.342-0.023-81.52-0.105-39.039-0.121-68.363-26.329-68.403-60.714-0.032-27.006-0.041-54.012-0.041-81.017v-16.8c0 27.005 0.009 54.011 0.041 81.016 0.04 34.387 29.364 60.593 68.403 60.715 27.178 0.083 54.342 0.105 81.52 0.105 39.432 0 78.876-0.053 118.308-0.063 3.824 0 7.604-0.234 11.319-0.742"
        fill="#BF3F1F"
      />
    </svg>
  );
};

export { DeleteIcon };
