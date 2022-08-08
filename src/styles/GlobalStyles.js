import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 

main{
    background-color:${({ theme }) => theme.primary} ;
    color:${({ theme }) => theme.text};   
}

header{
    background-color:${({ theme }) => theme.terciary} ;
}

#burger > span {
    background-color:${({ theme }) => theme.white} ;   
}

#mobile-nav {
    background-color:${({ theme }) => theme.primary} ;   
}

nav li{
    color:${({ theme }) => theme.white} ;   
}

#Principal, #Skills article, #Projects, #Service article{
  background-color:${({ theme }) => theme.terciary} ;
}

#sun{
    color: ${({ theme }) => theme.white} ;
}

#logos svg {
    fill: ${({ theme }) => theme.white} ;
}

#logos svg:hover {
    fill: ${({ theme }) => theme.green} ;
}

#Juanse figure, #nombre figure {
    background-color:${({ theme }) => theme.primary} ;
}

#wrapper-container {
    background-color:${({ theme }) => theme.dark_green} ;
}

.flex-buttons button {
    background-color:${({ theme }) => theme.terciary};
    color:${({ theme }) => theme.white}
}

.flex-buttons button:hover {
    color:${({ theme }) => theme.terciary};
    background-color:${({ theme }) => theme.white} ;
}

#Projects figure{
    background-color:${({ theme }) => theme.grey} ;
}

.projects-article{
    background-color:${({ theme }) => theme.green} ;
}

.view-more svg, .service-logo {
    fill:${({ theme }) => theme.green}
}

#Service article:hover > .view-more svg, #Service article:hover > .service-logo {
    fill:${({ theme }) => theme.white}
}

#Contact{
    background-color:${({ theme }) => theme.terciary} ;
}

#contact{
    background-color:${({ theme }) => theme.dark_green} ;
}

footer{
    background-color:${({ theme }) => theme.terciary} ;
}

`

export const light = {
};

export const dark = {
  primary: "#0D1017",
  green: "var(--green)",
  dark_green: "var(--dark-green)",
  terciary: "#21262E",
  white: "#fff",
  grey: "var(--grey)",
  text: "#F0F6FC",
};