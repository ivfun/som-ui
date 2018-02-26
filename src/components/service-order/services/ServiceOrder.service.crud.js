import GenericCrud from '../../../utils/classes/GenericCrud';



class ServiceOrderCrud extends GenericCrud{
    constructor(){
        super('/component');
    }
}

export default new ServiceOrderCrud();