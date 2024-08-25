import { Area } from "./styles"
import AtomText from "../../atoms/Text";
import { FontFamilies, FontSizes } from "../../atoms/Text/types";
import { ABYSS } from "../../../utils/global/colors";

type ListT = { key: string }

const list: ListT[] = [
    { key: 'Lavar' },
    { key: 'Programar' },
    { key: 'Levar lixo' },
    { key: 'Cozinhar' },
]

const TaskList = () => {
    return (
        <Area
            data={list}
            initialNumToRender={3}
            maxToRenderPerBatch={1}
            // @ts-ignore
            renderItem={({ item }) => <AtomText size={FontSizes.TITLE} color={ABYSS.normal} family={FontFamilies.SEMI} value={item.key} />}
        />
    );
}

export default TaskList;