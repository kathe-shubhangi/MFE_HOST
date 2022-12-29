module.exports = async () => {
    return {
        moduleNameMapper: {
            '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
            '\\.(jpg|jpeg|png|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
                '<rootDir>/__mocks__/c3s.js',
            '\\.(css|scss|less)$': 'identity-obj-proxy',
        },
        testEnvironment: 'jsdom',
    };
}    