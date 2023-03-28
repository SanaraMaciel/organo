import './Banner.css'

function Banner(){

    //o parenteses é usado para fazer um return de multiplas linhas
    //JSX parece um html mas não é ele é como o react lê o "html" e transforma ele no dom
    return (
        <header className="banner">
            <img src="/images/banner.png" alt="O banner principal da página do Organo"/>
        </header>
       

    )
}

export default Banner