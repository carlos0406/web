import { CloseButton } from "../CloseButton";
import bugImg from  '../../assets/bug.svg'
import ideaImg from  '../../assets/idea.svg'
import otherImg from  '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";
export const feedBackTypes={
    BUG:{
        title: 'Problema',
        image:{
            source: bugImg,
            alt: 'imagem de um inseto'
        }
    },
    IDEA:{
        title: 'Ideia',
        image:{
            source: ideaImg,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER:{
        title: 'Outro',
        image:{
            source: otherImg,
            alt: 'imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedBackTypes;
export function WidgetForm(){
    const [feedbackType,setFeedbackType]=useState<FeedbackType | null>(null);
    const [feedbackSent,setFeedbackSent]=useState(false);
    function handleResetFeedback(){
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent?(
                <FeedbackSucessStep onFeedbackRestarRequest={handleResetFeedback}/>
            ):(
                <>
                     {!feedbackType?(
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                        ):(
                            <FeedbackContentStep feedBackType={feedbackType} resetFeedback={handleResetFeedback} onFeedbaclSent={()=>setFeedbackSent(true)}/>
                        
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="http://https://rocktseat.com.br/">Rocketseat</a>
            </footer>
        </div>
    )
}