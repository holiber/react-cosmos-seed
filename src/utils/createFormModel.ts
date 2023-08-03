// import {SchemaDefinitionWithShorthand} from "simpl-schema/dist/cjs/types";
import SimpleSchema from "simpl-schema";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";

type schemaDefType =  Required<ConstructorParameters<typeof SimpleSchema>[0]>
export function createFormSchema(schemaDef: schemaDefType) {
    const formSchema = new SimpleSchema(schemaDef);
    const formBridge = new SimpleSchema2Bridge({schema: formSchema});
    return formBridge;
}
