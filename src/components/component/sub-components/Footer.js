import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';
class Footer extends Component{
    render(){
        return(
            <div className="footer-content">
                <Button basic loading={false} type="submit">Cancelar</Button>
                <Button secondary loading={false} type="submit">Salvar</Button>

            </div>
        )
    }
}
export default Footer;