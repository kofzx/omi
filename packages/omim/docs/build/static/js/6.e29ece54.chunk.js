webpackJsonp([6],{124:function(n,e){n.exports="## Table\n\n\u8868\u683c\uff0c\u7528\u4e8e\u663e\u793a\u4e8c\u7ef4\u6570\u636e\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-table id=\"myTable\"></m-table>\n\n<script>\n  const table = document.querySelector('#myTable')\n  table.checkbox = true\n  table.dataSource = [{\n    id: 1,\n    name: 'xwang',\n    age: 18,\n    address: 'Tencent'\n  }, {\n    id: 2,\n    name: 'dntzhang',\n    age: 12,\n    address: 'Tencent'\n  }, {\n    id: 3,\n    name: 'lucy',\n    age: 12,\n    address: 'Tencent'\n  }, {\n    id: 4,\n    name: 'john',\n    age: 12,\n    address: 'Tencent'\n  }, {\n    id: 5,\n    name: 'tim',\n    age: 12,\n    address: 'Tencent'\n  }]\n\n  table.columns = [{\n    title: 'Name',\n    key: 'name',\n  }, {\n    title: 'Age',\n    key: 'age',\n  }, {\n    title: 'Address',\n    key: 'address',\n  }, {\n    title: '\u64cd\u4f5c',\n    render: (item) => (\n      Omi.html`<span>\n        <a href=\"javascript:;\" onClick=${e => {\n          table.dataSource.splice(table.dataSource.indexOf(item), 1)\n          table.update()\n        }}>Delete</a>\n      </span>`\n    )\n  }]\n\n  table.update()\n<\/script>\n```\n\n## Omi \u4e2d\u4f7f\u7528\n\n```jsx\n<m-table\n  checkbox\n  dataSource={this.dataSource}\n  columns={this.columns}>\n</m-table>\n```\n\n## API\n\n### Props\n\n```jsx\n{\n\tdataSource: any[],\n\tcolumns: any[],\n\tcheckbox?: boolean\n}\n```\n"}});
//# sourceMappingURL=6.e29ece54.chunk.js.map