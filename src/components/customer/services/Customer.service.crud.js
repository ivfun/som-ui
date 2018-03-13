import GenericCrud from '../../../utils/classes/GenericCrud';



class CustomerServiceCrud extends GenericCrud{
    constructor(){
        super('/customer');
    }
}

export default new CustomerServiceCrud();