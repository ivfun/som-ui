import GenericCrud from '../../../utils/classes/GenericCrud';



class ComponentServiceCrud extends GenericCrud{
    constructor(){
        super('/component');
    }
}

export default new ComponentServiceCrud();