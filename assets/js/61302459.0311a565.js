"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i=n.p+"assets/images/basic-de284651459ae0385d39d3191bcd4bce.png",l=n.p+"assets/images/pagination-524c4e5bc248105b18b3ff61ee135948.gif",o=n.p+"assets/images/sorting-2298eb30356cc85e1a2e226e1ec709e2.gif",s=n.p+"assets/images/filtering-9af75808f122bd84af106428bb7ccc4a.gif",d={id:"react-table",title:"React Table"},p=void 0,c={unversionedId:"packages/react-table",id:"packages/react-table",title:"React Table",description:"refine offers a TanStack Table adapter with @pankod/refine-react-table that allows you to use the TanStack Table library with refine. Thus, you can manage your server-side data fetching operations.",source:"@site/docs/packages/react-table.md",sourceDirName:"packages",slug:"/packages/react-table",permalink:"/docs/packages/react-table",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/packages/react-table.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1658832791,formattedLastUpdatedAt:"7/26/2022",frontMatter:{id:"react-table",title:"React Table"},sidebar:"someSidebar",previous:{title:"Custom Sider",permalink:"/docs/ui-frameworks/mui/customization/mui-custom-sider"},next:{title:"useForm",permalink:"/docs/packages/react-hook-form/useForm"}},m={},u=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Create <code>&lt;PostList&gt;</code> component",id:"create-postlist-component",level:3},{value:"Create basic table",id:"create-basic-table",level:3},{value:"Pagination",id:"pagination",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Filtering",id:"filtering",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],h={toc:u};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," offers a ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},"TanStack Table")," adapter with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/react-table"},"@pankod/refine-react-table")," that allows you to use the TanStack Table library with ",(0,r.kt)("strong",{parentName:"p"},"refine"),". Thus, you can manage your server-side data fetching operations."),(0,r.kt)("p",null,"All of TanStack Table's features are supported and you can use all of the TanStack Table's examples with no changes just copy and paste them into your project."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/react-table"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-table"))," library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-react-table\n")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"In this documentation, we'll step-by-step create an example of a headless table with sorting, filtering, and pagination capabilities."),(0,r.kt)("p",null,"Let's say you have a endpoint that returns the following data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'[\n    {\n        "id": 182,\n        "title": "A aspernatur rerum molestiae.",\n        "content": "Natus molestias incidunt voluptatibus. Libero delectus facilis...",\n        "status": "published",\n        "createdAt": "2021-04-18T00:09:11.607Z"\n    },\n    {\n        "id": 989,\n        "title": "A molestiae vel voluptatem enim.",\n        "content": "Voluptas consequatur quia beatae. Ipsa est qui culpa deleniti...",\n        "status": "draft",\n        "createdAt": "2020-01-28T02:57:58.892Z"\n    }\n]\n')),(0,r.kt)("h3",{id:"create-postlist-component"},"Create ",(0,r.kt)("inlineCode",{parentName:"h3"},"<PostList>")," component"),(0,r.kt)("p",null,"We simply create a ",(0,r.kt)("inlineCode",{parentName:"p"},"<PostList>")," component and pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component as a resource. All the implementation we will do from now on will be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<PostList>")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},"export const PostList: React.FC = () => {\n    return <></>;\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport "./App.css";\n\n//highlight-next-line\nimport { PostList } from "pages/posts/list";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            routerProvider={routerProvider}\n            //highlight-next-line\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show basic table style"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/App.css"',title:'"src/App.css"'},"table {\n    border-spacing: 0;\n    border: 1px solid black;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable tr:last-child td {\n    border-bottom: 0;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable th:last-child,\ntd:last-child {\n    border-right: 0;\n}\n")))),(0,r.kt)("h3",{id:"create-basic-table"},"Create basic table"),(0,r.kt)("p",null,"Firts, we need to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table")," library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},'//highlight-next-line\nimport { useTable } from "@pankod/refine-react-table";\n\nexport const PostList: React.FC = () => {\n    return <></>;\n};\n')),(0,r.kt)("p",null,"Define columns what we want to display in the table. Then, return the headless table with using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," does not expect any data prop to be passed to it. It will fetch data from the data provider by resource."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},'//highlight-next-line\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\ninterface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n    createdAt: string;\n}\n\nexport const PostList: React.FC = () => {\n    //highlight-start\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "status",\n                header: "Status",\n                accessorKey: "status",\n            },\n            {\n                id: "createdAt",\n                header: "CreatedAt",\n                accessorKey: "createdAt",\n            },\n        ],\n        [],\n    );\n    //highlight-end\n\n    //highlight-start\n    const { getHeaderGroups, getRowModel } = useTable({ columns });\n    //highlight-end\n\n    return (\n        //highlight-start\n        <table>\n            <thead>\n                {getHeaderGroups().map((headerGroup) => (\n                    <tr key={headerGroup.id}>\n                        {headerGroup.headers.map((header) => (\n                            <th key={header.id}>\n                                {header.isPlaceholder\n                                    ? null\n                                    : flexRender(\n                                          header.column.columnDef.header,\n                                          header.getContext(),\n                                      )}\n                            </th>\n                        ))}\n                    </tr>\n                ))}\n            </thead>\n            <tbody>\n                {getRowModel().rows.map((row) => (\n                    <tr key={row.id}>\n                        {row.getVisibleCells().map((cell) => (\n                            <td key={cell.id}>\n                                {flexRender(\n                                    cell.column.columnDef.cell,\n                                    cell.getContext(),\n                                )}\n                            </td>\n                        ))}\n                    </tr>\n                ))}\n            </tbody>\n        </table>\n        //highlight-end\n    );\n};\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This example is the same as the basic example in the ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},"TanStack Table")," documentation."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8/docs/examples/react/basic"},"Refer to the basic example of TanStack Table. ","\u2192")))),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:i,alt:"Basic Table"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"TanStack Table provides a bunch of methods that we can use to control the pagination. For example, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"setPageSize")," method to set the current ",(0,r.kt)("inlineCode",{parentName:"p"},"pageSize"),". Every change in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageSize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pageIndex")," will trigger a new request to the data provider."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8/docs/api/features/pagination"},"Refer to the TanStack Table Pagination API documentation for detailed information. ","\u2192")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table")," sets ",(0,r.kt)("inlineCode",{parentName:"p"},"manualPagination")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," by default to handle the pagination. If you set ",(0,r.kt)("inlineCode",{parentName:"p"},"hasPagination")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"refineCoreProps")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," config, it will disable the server-side pagination and it will let you handle the pagination in the client side."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},'import { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\ninterface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n    createdAt: string;\n}\n\nexport const PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(...); // Defined in the previous section\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        //highlight-start\n        getState,\n        setPageIndex,\n        getCanPreviousPage,\n        getPageCount,\n        getCanNextPage,\n        nextPage,\n        previousPage,\n        setPageSize,\n        //highlight-end\n    } = useTable({ columns });\n\n    return (\n        <>\n            <table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder\n                                        ? null\n                                        : flexRender(\n                                              header.column.columnDef.header,\n                                              header.getContext(),\n                                          )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </table>\n            // Pagination can be built however you\'d like. // This is just a very\n            basic UI implementation: //highlight-start\n            <div>\n                <button\n                    onClick={() => setPageIndex(0)}\n                    disabled={!getCanPreviousPage()}\n                >\n                    {"<<"}\n                </button>\n                <button\n                    onClick={() => previousPage()}\n                    disabled={!getCanPreviousPage()}\n                >\n                    {"<"}\n                </button>\n                <button onClick={() => nextPage()} disabled={!getCanNextPage()}>\n                    {">"}\n                </button>\n                <button\n                    onClick={() => setPageIndex(getPageCount() - 1)}\n                    disabled={!getCanNextPage()}\n                >\n                    {">>"}\n                </button>\n                <span>\n                    <div>Page</div>\n                    <strong>\n                        {getState().pagination.pageIndex + 1} of{" "}\n                        {getPageCount()}\n                    </strong>\n                </span>\n                <span>\n                    | Go to page:\n                    <input\n                        type="number"\n                        defaultValue={getState().pagination.pageIndex + 1}\n                        onChange={(e) => {\n                            const page = e.target.value\n                                ? Number(e.target.value) - 1\n                                : 0;\n                            setPageIndex(page);\n                        }}\n                    />\n                </span>\n                <select\n                    value={getState().pagination.pageSize}\n                    onChange={(e) => {\n                        setPageSize(Number(e.target.value));\n                    }}\n                >\n                    {[10, 20, 30, 40, 50].map((pageSize) => (\n                        <option key={pageSize} value={pageSize}>\n                            Show {pageSize}\n                        </option>\n                    ))}\n                </select>\n            </div>\n            //highlight-end\n        </>\n    );\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:l,alt:"Pagination Table"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"TanStack Table provides a bunch of methods that we can use to control the sorting. For example, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"setColumnOrder")," method to set the current ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting")," value. Every change in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting")," state will trigger a new request to the data provider."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/docs/api/useSortBy#usesortby"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useSortBy")," documentation for detailed information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},'import { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\ninterface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n    createdAt: string;\n}\n\nexport const PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(...); // Defined in the previous section\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        getState,\n        setPageIndex,\n        getCanPreviousPage,\n        getPageCount,\n        getCanNextPage,\n        nextPage,\n        previousPage,\n        setPageSize,\n    } = useTable({ columns });\n\n    return (\n        <>\n            <table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder ? null : (\n                                        //highlight-start\n                                        <div\n                                            onClick={header.column.getToggleSortingHandler()}\n                                        >\n                                            {flexRender(\n                                                header.column.columnDef.header,\n                                                header.getContext(),\n                                            )}\n                                            {{\n                                                asc: " \ud83d\udd3c",\n                                                desc: " \ud83d\udd3d",\n                                            }[\n                                                header.column.getIsSorted() as string\n                                            ] ?? null}\n                                        </div>\n                                        //highlight-end\n                                    )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </table>\n            // Pagination defined in the previous section\n        </>\n    );\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:o,alt:"Sortable Table"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"TanStack Table provides a bunch of methods that we can use to control the filtering. For example, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"setColumnFilters")," method to set the current ",(0,r.kt)("inlineCode",{parentName:"p"},"columnFilters")," value. Every change in the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," will trigger a new request to the data provider."),(0,r.kt)("p",null,"You can specify which field will be filtered with which filter operator with the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterOperator")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," object. ",(0,r.kt)("inlineCode",{parentName:"p"},"filterOperator")," must be a ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/interfaceReferences#crudoperators"},(0,r.kt)("inlineCode",{parentName:"a"},"CrudOperators"))," type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},'import { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\ninterface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n    createdAt: string;\n}\n\nexport const PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n                //highlight-start\n                meta: {\n                    filterOperator: "contains",\n                },\n                //highlight-end\n            },\n            {\n                id: "status",\n                header: "Status",\n                accessorKey: "status",\n                //highlight-start\n                meta: {\n                    filterOperator: "contains",\n                },\n                //highlight-end\n            },\n            {\n                id: "createdAt",\n                header: "CreatedAt",\n                accessorKey: "createdAt",\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        getState,\n        setPageIndex,\n        getCanPreviousPage,\n        getPageCount,\n        getCanNextPage,\n        nextPage,\n        previousPage,\n        setPageSize,\n    } = useTable({ columns });\n\n    return (\n        <>\n            <table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder ? null : (\n                                        <>\n                                            <div\n                                                onClick={header.column.getToggleSortingHandler()}\n                                            >\n                                                {flexRender(\n                                                    header.column.columnDef\n                                                        .header,\n                                                    header.getContext(),\n                                                )}\n                                                {{\n                                                    asc: " \ud83d\udd3c",\n                                                    desc: " \ud83d\udd3d",\n                                                }[\n                                                    header.column.getIsSorted() as string\n                                                ] ?? null}\n                                            </div>\n                                            //highlight-start\n                                            <div>\n                                                <input\n                                                    value={\n                                                        (header.column.getFilterValue() as string) ??\n                                                        ""\n                                                    }\n                                                    onChange={(e) =>\n                                                        header.column.setFilterValue(\n                                                            e.target.value,\n                                                        )\n                                                    }\n                                                />\n                                            </div>\n                                            //highlight-end\n                                        </>\n                                    )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </table>\n            // Pagination defined in the previous section\n        </>\n    );\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:s,alt:"Filtering"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refineCoreProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration object for the core of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/hooks/useTable"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/hooks/useTable#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"UseTableProps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tanstack Table Properties"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://tanstack.com/table/v8/docs/api/core/table#options"},"TanStack Table")," documentation"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refineCore"),(0,r.kt)("td",{parentName:"tr",align:null},"The return values of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/hooks/useTable"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable"))," in the core"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/hooks/useTable#return-values"},(0,r.kt)("inlineCode",{parentName:"a"},"UseTableReturnValues")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tanstack Table Return Values"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://tanstack.com/table/v8/docs/api/core/table#table-api"},"TanStack Table")," documentation"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,r.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/table/reactTable/basic/?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-react-table-example"}))}g.isMDXComponent=!0}}]);