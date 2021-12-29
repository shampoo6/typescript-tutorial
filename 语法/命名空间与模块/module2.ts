export module M2 {
    let count = 5
    // module 中使用 export 导出内容
    export function increaseCount() { return ++count; }
}

export namespace N2 {
    export const msg = 'hello N2!!'
}

export default M2