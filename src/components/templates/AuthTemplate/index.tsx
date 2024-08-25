import { Area, Title } from "./styles";
import { LoginTemplateType } from "./types";
import AtomText from "../../atoms/Text";
import { FontFamilies, FontSizes } from "../../atoms/Text/types";
import BackButton from "../../molecules/BackButton";
import Form from "../../organisms/Form";
import { WHITE_PALACE } from "../../../utils/global/colors";

const AuthTemplate = ({
    back = false,
    backFunction = () => { },
    title,
    subtitle,
    form,
    entering,
    exiting,
}: LoginTemplateType) => {

    return (
        <Area entering={entering} exiting={exiting}>
            {back &&
                <BackButton backFunction={backFunction} />
            }
            <Title>
                <AtomText
                    size={FontSizes.H1}
                    family={FontFamilies.EXTRA}
                    value={title}
                />
                <AtomText
                    size={FontSizes.BODY1}
                    value={subtitle}
                    color={WHITE_PALACE.dark}
                />
            </Title>
            <Form fields={form.fields} submit={form.submit} forgot={form.forgot} />
        </Area>
    );
}

export default AuthTemplate;