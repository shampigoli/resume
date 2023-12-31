import React from 'react'

function Card() {
  return (
    <div>
    <Card className="mt-6 w-96 text-black">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="/member1.jpg"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Card;