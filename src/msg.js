const codeResMsg = new Map([
    [1, "请求错误"],

    [1000, "登录信息过期"],

    [1001, "用户已存在"],
    [1002, "用户不存在"],

    [2001, "分类名字已存在"],
    [2002, "分类不存在"],

    [3002, "文章不存在"],
]);

export const codeMsg = (code) => {
    return codeResMsg.has(code) ? codeResMsg.get(code) : codeResMsg.get(1);
};