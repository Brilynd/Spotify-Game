import {useCookies} from "react-cookie"
import { useNavigate } from "react-router"
import { useEffect } from "react"

function IsLogged({Children}){
    const navigate = useNavigate();
    const [cookies,setCookie] = useCookies();
    let cookieValue
    useEffect(()=>{
        cookieValue = cookies.session
        if (cookieValue==null){
            navigate('/')
        }
    },[])
    return(
        <React.Fragment>
            {Children!=undefined && <Children/>}
        </React.Fragment>
    )
}
