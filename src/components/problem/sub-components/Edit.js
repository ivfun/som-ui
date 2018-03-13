import React, {Component} from 'react';
import {Form, Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {setDescription, setId} from "../_store/actions/ProblemModelAction";

class EditComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            editElem:props.editElem
        }
    }
    componentWillMount(){
        this.props.setId(this.state.editElem.id)
    }
    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){
        this.setState({
            editElem:props.editElem
        });
    }

    onChange(e){
        e.preventDefault();
        this.props.setDescription(e.target.value);
    }

    render(){
        let {description} = this.state.editElem;
        return(
            <Form>
                <Grid>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <Form.Field>
                                <label>Descrição</label>
                                <input defaultValue={description} onChange={this.onChange.bind(this)} name='description' placeholder='Descrição' />
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Form>

        )
    }
}
const mapStateToProps = ({problem:{problemScreen}}) => {
    return problemScreen
};

const mapDispatchToProps = dispatch => ({
    setDescription(value){
        dispatch(setDescription(value))
    },
    setId(value){
        dispatch(setId(value))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(EditComponent);