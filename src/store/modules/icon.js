const modulesFiles = require.context('../../fonts', true, /iconfont\.json$/)
let icon = [];
modulesFiles.keys().map(key => {
    const file = modulesFiles(key);

    const ret = file.glyphs && file.glyphs.map && file.glyphs.map(e => {
        return {
            value: file.css_prefix_text + e.font_class,
            label: e.name
        }
    })
    if (ret && ret.length) {
        icon = icon.concat(ret);
    }

})

const state = {
    icons: icon
};

export default {
    namespaced: true,
    state
}
