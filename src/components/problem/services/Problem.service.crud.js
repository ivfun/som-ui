import GenericCrud from '../../../utils/classes/GenericCrud';



class ProblemServiceCrud extends GenericCrud{
    constructor(){
        super('/problem');
    }
}

export default new ProblemServiceCrud();