import GenericCrud from '../../../utils/classes/GenericCrud';



class ServiceOrderServiceCrud extends GenericCrud{
    constructor(){
        super('/service-order');
    }
}

export default new ServiceOrderServiceCrud();