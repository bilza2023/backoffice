

export default async function getObtained(result){
    let ttl = 0;
    for (let i = 0; i < result.answers.length; i++) {
        const answer = result.answers[i];
            ttl += answer.marksObtained;
    }
return ttl;
}