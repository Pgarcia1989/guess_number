

function MenuItem(state, container){
    this.container = container;
    this.state = state;

//  Template

    this.template = () => {
        const {title, path} = this.state.item;
        const root = document.createElement('li');
        new link({title, path}, root);

        return root;
    }
    this.render();

}
MenuItem.prototype = component;

export default MenuItem;