import GenericCrud from '../../../utils/classes/GenericCrud';



class SolutionServiceCrud extends GenericCrud{
    constructor(){
        super('/solution');
    }
}

export default new SolutionServiceCrud();