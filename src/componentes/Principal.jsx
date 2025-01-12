import React, { useState } from 'react';
import ContenidoInicio from './ContenidoInicio.jsx';
import SearchBar from './SearchBar.jsx';
import FullPageMenu from './FullPageMenu.jsx';
function Principal(){
    const [isActive, setIsActive] = useState(false);
  
    const menutoggle = ()=>{
      setIsActive(!isActive);
    };
    return (
      <>
        <SearchBar menutoggle={menutoggle} />
        <FullPageMenu isActive={isActive} />
        <ContenidoInicio/>
      </>
    );
  }

  export default Principal;