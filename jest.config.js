module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    setupFiles: ['./test/jest-setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    // eslint-disable-next-line no-useless-escape
    testRegex: 'test/.*\.spec\.js$'
};
