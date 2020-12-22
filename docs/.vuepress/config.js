module.exports = {
    title: '含笑半步颠の笔记',  // 设置网站标题
    description: '含笑半步颠の工作笔记',
    base: '/dist/',
    themeConfig: {
        nav: [
            { text: '接口定义', link: '/apiword' },
            { text: '接口字段定义', link: '/api' },
            { text: '附录：错误码', link: '/error' }
        ],
        sidebar: {
            '/': [
                "/", //指的是根目录的md文件 也就是 README.md 里面的内容
                "apiword", //根目录创建 apiword.md文件
                "api", //根目录创建 api.md文件
                "error" //根目录创建 error.md文件
            ],
            '/test': [
                {
                    title: 'test',
                    path: 'test'
                }

            ]

        },
        sidebarDepth: 2
    },
    plugins: ['permalink-pinyin', ['autobar', { 'pinyinNav': true }]],
}