import React, {FC} from 'react';
import propTypes from 'prop-types';
import {
    Box,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material';
import {Section} from '../../components/tests/section';

interface Answer {
    title: string;
    value: any;
}

interface Questions {
    title: string;
    answers: Answer[];
}

interface QuestionProps {
    questions: Questions[];
}

export const Question: FC<QuestionProps> = (props) => {
    const {questions} = props;
    return (<Box>
        {questions.map((quest, key) => (
            <Box key={key}>
                <Section sx={{p: 4 ,pb: 2}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{color: 'black'}}><b>{quest.title}</b></FormLabel>
                        <RadioGroup
                            aria-label="answers"
                            name="radio-buttons-group"
                        >
                            {quest.answers.map((answer, key2) => (
                                <FormControlLabel value={answer.value} key={key2} control={<Radio/>} label={answer.title}/>
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Section>
            </Box>
        ))}
    </Box>)
}

Question.propTypes = {
    questions: propTypes.array.isRequired,
};



