import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import ComponentService from '../services/Component.service';

class Footer extends Component{
    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){
        let {dispatch,...objectToSave} = props;
        this.setState({objectToSave});
    }
    save(e){
        e.preventDefault();
        ComponentService.save(this.state.objectToSave)
    }

    render(){
        return(
            <div className="footer-content">
                <Button basic loading={false} type="button">Cancelar</Button>
                <Button secondary loading={false} type="submit" onClick={this.save.bind(this)}>Salvar</Button>
            </div>
        )
    }
}

const mapStateToProps = ({component:{componentModel}}) => {
    return componentModel;
};
export default connect(mapStateToProps)(Footer);