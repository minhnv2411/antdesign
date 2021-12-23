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
    return <Box>
        {questions.map((quest,key) => (
            <FormControl component="fieldset" sx={{py: 2}} key={key}>
                <FormLabel component="legend" sx={{color: 'black'}}><b>{quest.title}</b></FormLabel>
                <RadioGroup
                    aria-label="answers"
                    name="radio-buttons-group"
                >
                    {quest.answers.map((answer, key2) => (
                        <FormControlLabel sx={{py: 1}} value={answer.value} key={key2} control={<Radio/>} label={answer.title}/>
                        ))}
                </RadioGroup>
            </FormControl>
        ))}
    </Box>
}

Question.propTypes = {
    questions: propTypes.array.isRequired,
};



