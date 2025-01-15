import React from "react";
import styled from "styled-components";

const MainLayout = ({children}) => {

    return <LayoutContainer>{children}</LayoutContainer>

}

const LayoutContainer = styled.div`
// margin-top: 10px;
padding: 16px;
box-sizing: border-box;
background-color:red;
`

export default MainLayout;