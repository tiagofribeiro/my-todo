import { Area, Title } from "./styles";
import { LoginTemplateType } from "./types";
import Text from "../../atoms/Text";
import BackButton from "../../molecules/BackButton";
import Form from "../../organisms/Form";

const LoginTemplate = ({
    back = false,
    backFunction = () => {},
    title,
    subtitle,
    form,
    entering,
    exiting,
}: LoginTemplateType) => {

    return (
        <Area entering={entering} exiting={exiting}>
            {back &&
                <BackButton backFunction={backFunction}/>
            }
            <Title>
                <Text size={"h3"} value={title} />
                <Text size={"body2"} value={subtitle} />
            </Title>
            <Form fields={form.fields} submit={form.submit} />
        </Area>
    );
}

export default LoginTemplate;