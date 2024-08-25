export class SidebarResponse {
  sidebar: Array<SidebarItem>;

  constructor(sidebar: Array<SidebarItem> = []) {
    this.sidebar = sidebar;
  }
}

export class SidebarItem {
  name: string;
  children: Array<SidebarChild>;

  constructor(name: string, children: Array<SidebarChild> = []) {
    this.name = name;
    this.children = children;
  }
}

export class SidebarChild {
  name: string;
  components: Array<ComponentItem>;

  constructor(name: string, components: Array<ComponentItem> = []) {
    this.name = name;
    this.components = components;
  }
}

export class ComponentItem {
  component: string;
  link: string

  constructor(component: string, link: string) {
    this.component = component;
    this.link = link
  }
}
