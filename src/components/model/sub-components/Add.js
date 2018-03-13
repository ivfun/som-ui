import React, {Component} from 'react';
import {Form, Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {setDescription} from "../_store/actions/ModelModelAction";

class AddComponent extends Component{
    onChange(e){
        e.preventDefault();
        this.props.setDescription(e.target.value);
    }

    render(){
        return(
            <Form>
                <Grid>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <Form.Field>
                                <label>Descrição</label>
                                <input onChange={this.onChange.bind(this)} name='description' placeholder='Descrição' />
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Form>

        )
    }
}

const mapDispatchToProps = dispatch => ({
    setDescription(value){
        dispatch(setDescription(value))
    }
});

export default connect(null,mapDispatchToProps)(AddComponent);