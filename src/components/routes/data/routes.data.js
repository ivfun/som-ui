
import Loadable from 'react-loadable';
import LoadingComponent from "../../loading/Loading";

const ServiceOrderComponentAsync = Loadable({
    loader: () => import('../../service-order/ServiceOrder'),
    loading: LoadingComponent,
});

const ComponentComponentAsync = Loadable({
    loader: () => import('../../component/Component'),
    loading: LoadingComponent,
});

const SolutionComponentAsync = Loadable({
    loader: () => import('../../solution/Solution'),
    loading: LoadingComponent,
});

const ProblemComponentAsync = Loadable({
    loader: () => import('../../problem/Problem'),
    loading: LoadingComponent,
});

export const routes = ()=>{
    return [
        {
            path:'/service-order',
            loadable:ServiceOrderComponentAsync,
            description:'Ordem de Serviço'
        },
        {
            path:'/component',
            loadable:ComponentComponentAsync,
            description:'Componente'
        },
        {
            path:'/solution',
            loadable:SolutionComponentAsync,
            description:'Solução'
        },
        {
            path:'/problem',
            loadable:ProblemComponentAsync,
            description:'Problema'
        },
    ];
};

