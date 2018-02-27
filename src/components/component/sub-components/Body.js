import React,{Component} from 'react';
import {Form, Grid} from 'semantic-ui-react';
import ComponentModel from '../model/component.model';

class Body extends Component{
    constructor(props){
        super(props)
        this.state = new ComponentModel();
    }
    componentWillMount(){
        this.setState(new ComponentModel())
    }
    onChange(e){
        e.preventDefault();
        let model ={};
        model[e.target.name] = e.target.value;
        this.setState(model);
    }
    render(){
        return(
            <div className="body-content">
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
            </div>
        )
    }
}
export default Body;