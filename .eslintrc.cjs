module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true, // Добавляем node, так как Next.js работает и на сервере
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@next/next/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '.next'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react-refresh', '@typescript-eslint'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'no-undef': 'off',
        'react/react-in-jsx-scope': 'off',
        "@typescript-eslint/no-unused-vars": "error",
        "no-unused-vars": "off",
    },
};