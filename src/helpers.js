/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * O Helper é onde você irá inserir variáveis globais do seu site.
 * by: Vagner Pinto
 */

//título da página (se não for inserido pelo controller ele entra em ação, desde que isso esteja na view)
exports.defaultPageTitle = 'Basic Server em NodeJS (helper)';

//só para demonstrar que menus, se globais, podem ser centralizados no helper
exports.menu = [
    {name:'Home', slug:'/'},
    {name:'Login', slug:'/login'},
    {name:'Contato', slug:'/contato'},
    {name:'Template Engine', slug:'/templateengine'}
];
