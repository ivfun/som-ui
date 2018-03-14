export const getItemsFiltered = (items, search) =>{

    let itemsFiltered = [];
    if(search.text !== '' )
        itemsFiltered = items.filter(f=>{
            let isValid = true;
            switch (typeof f[search.field]){
                case 'string':
                    isValid = f[search.field].toLowerCase().includes(search.text.toLowerCase());
                    break;

                case 'number':
                    isValid = f[search.field] === parseInt(search.text, 10);
                    break;
                default:
                    break;
            }
            return isValid;
        });
    else
        itemsFiltered = items;

    return itemsFiltered;
};