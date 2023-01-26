import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths( 'src/**/*.ts' );
project.addSourceFilesAtPaths( 'src/**/*.tsx' );

const sourceFiles = project.getSourceFiles();

const layers = [
    'app',
    'features',
    'entities',
    'shared',
    'widgets',
    'pages'
];

const isAbsolute = ( path: string ) => {
    return layers.some( layer => path.startsWith( layer ) );
};

sourceFiles.forEach( sourceFile => {
    const imports = sourceFile.getImportDeclarations();
    imports.forEach( importDeclaration => {
        const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
        if ( isAbsolute( moduleSpecifier ) ) {
            importDeclaration.setModuleSpecifier( `@/${ moduleSpecifier }` );
        }
    } );
} );

project.saveSync();
