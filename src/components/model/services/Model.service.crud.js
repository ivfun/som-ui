import GenericCrud from '../../../utils/classes/GenericCrud';



class ModelServiceCrud extends GenericCrud{
    constructor(){
        super('/model');
    }
}

export default new ModelServiceCrud();