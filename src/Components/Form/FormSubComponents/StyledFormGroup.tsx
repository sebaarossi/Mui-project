import { styled } from "@mui/material/styles";
import { FormGroup} from "@mui/material";

type StyledFormGroupProps = {
    paddingTop?: number
}

export const StyledFormGroup = styled(FormGroup, {
    name: "StyledFormGroup",
    slot: "wrapper",
    skipSx: true
})<StyledFormGroupProps>(
    (props) => ({
        padding: props.theme.spacing(2),
        justifyContent: "space-between",
        paddingTop: props.paddingTop
    })
)