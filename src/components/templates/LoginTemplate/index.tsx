import { Area, Title } from "./styles";
import { LoginTemplateType } from "./types";
import Text from "../../atoms/Text";
import Form from "../../organisms/Form";

const LoginTemplate = ({ title, subtitle, form, entering, exiting }: LoginTemplateType) => {

    return (
        <Area entering={entering} exiting={exiting}>
            <Title>
                <Text size={"h3"} value={title} />
                <Text size={"body2"} value={subtitle} />
            </Title>
            <Form fields={form.fields} submit={form.submit} />
        </Area>
    );
}

export default LoginTemplate;